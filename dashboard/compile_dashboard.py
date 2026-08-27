#!/usr/bin/env python3
"""
🔭 KremFest XR — Standalone Project Telemetry Dashboard Compiler
Scans tasks.md, devlog.md, lineups.json, and compiles projects/kremfest-xr/dashboard/index.html
"""

import sys
import os
import re
import json

if sys.platform == "win32":
    sys.stdout.reconfigure(encoding='utf-8')


def parse_tasks(tasks_path):
    counts = {"ready_for_qa": 0, "in_progress": 0, "completed": 0, "backlog": 0}
    qa_tasks = []
    prog_tasks = []
    
    if not os.path.exists(tasks_path):
        return counts, qa_tasks, prog_tasks
        
    with open(tasks_path, "r", encoding="utf-8") as f:
        lines = f.readlines()
        
    for line in lines:
        line_s = line.strip()
        if re.search(r"\[\s*\]\s*🧪", line_s):
            counts["ready_for_qa"] += 1
            clean = re.sub(r"^\*\s*\[\s*\]\s*🧪\s*", "", line_s)
            qa_tasks.append(clean)
        elif re.search(r"\[\s*\]\s*🛠️", line_s):
            counts["in_progress"] += 1
            clean = re.sub(r"^\*\s*\[\s*\]\s*🛠️\s*", "", line_s)
            prog_tasks.append(clean)
        elif re.search(r"\[x\]\s*🏆", line_s, re.IGNORECASE):
            counts["completed"] += 1
            
    return counts, qa_tasks, prog_tasks


def parse_devlog(devlog_path):
    if not os.path.exists(devlog_path):
        return "v0.1.0", "Genesis", []
    with open(devlog_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    entries = re.findall(r"###\s*\[(.*?)\]\s*-\s*(v[\d\.]+):\s*(.*?)\n", content)
    if entries:
        latest = entries[0]
        return latest[1], latest[2], entries[:5]
    return "v0.1.0", "Active Substrate", []


def compile_hud():
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
    tasks_path = os.path.join(base_dir, "tasks.md")
    devlog_path = os.path.join(base_dir, "devlog.md")
    data_path = os.path.join(base_dir, "private", "submission_pipeline", "data", "lineups.json")
    out_path = os.path.join(base_dir, "dashboard", "index.html")
    
    counts, qa_tasks, prog_tasks = parse_tasks(tasks_path)
    version, title, recent_logs = parse_devlog(devlog_path)
    
    # Load catalog stats
    fest_editions = 5
    total_projects = 0
    if os.path.exists(data_path):
        try:
            with open(data_path, "r", encoding="utf-8") as f:
                cat = json.load(f)
                for yr, data in cat.get("years", {}).items():
                    total_projects += len(data.get("headliners", [])) + len(data.get("selections", []))
        except Exception:
            pass

    qa_list_html = "".join([f'<li style="margin-bottom:8px; color:#f1f5f9; font-size:0.9rem;">🧪 {t}</li>' for t in qa_tasks]) or '<li style="color:#94a3b8;">No tasks currently waiting for QA.</li>'
    prog_list_html = "".join([f'<li style="margin-bottom:8px; color:#f1f5f9; font-size:0.9rem;">🛠️ {t}</li>' for t in prog_tasks]) or '<li style="color:#94a3b8;">All active tasks staged for QA review.</li>'
    
    logs_html = "".join([f'<div style="border-left:2px solid #00f0ff; padding-left:10px; margin-bottom:12px;"><strong style="color:#00f0ff;">{e[1]}</strong> <span style="color:#94a3b8; font-size:0.8rem;">({e[0]})</span><div style="font-size:0.85rem; color:#cbd5e1;">{e[2]}</div></div>' for e in recent_logs])

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🎪 KremFest XR — Telemetry Observatory ({version})</title>
  <style>
    :root {{
      --bg: #07090e;
      --card-bg: rgba(13, 17, 28, 0.85);
      --border: rgba(0, 240, 255, 0.2);
      --text: #f8fafc;
      --neon-pink: #ff007f;
      --neon-cyan: #00f0ff;
      --neon-yellow: #ffde59;
      --neon-green: #00ff88;
      --neon-purple: #9d4edd;
    }}
    * {{ box-sizing: border-box; margin: 0; padding: 0; }}
    body {{
      background: var(--bg);
      color: var(--text);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace;
      padding: 24px;
      line-height: 1.5;
    }}
    .header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 24px;
    }}
    .title-group h1 {{
      font-size: 1.6rem;
      font-weight: 900;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 10px;
    }}
    .version-tag {{
      background: linear-gradient(135deg, var(--neon-pink), var(--neon-purple));
      color: #fff;
      font-size: 0.75rem;
      padding: 4px 10px;
      border-radius: 9999px;
      font-weight: 800;
    }}
    .stats-row {{
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }}
    .stat-pill {{
      padding: 6px 14px;
      border-radius: 9999px;
      font-size: 0.85rem;
      font-weight: 700;
    }}
    .pill-qa {{ background: rgba(255, 222, 89, 0.15); border: 1px solid var(--neon-yellow); color: var(--neon-yellow); }}
    .pill-prog {{ background: rgba(0, 240, 255, 0.15); border: 1px solid var(--neon-cyan); color: var(--neon-cyan); }}
    .pill-done {{ background: rgba(0, 255, 136, 0.15); border: 1px solid var(--neon-green); color: var(--neon-green); }}
    .pill-meta {{ background: rgba(255, 0, 127, 0.15); border: 1px solid var(--neon-pink); color: var(--neon-pink); }}
    
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
    }}
    .card {{
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 30px rgba(0,0,0,0.5);
    }}
    .card h2 {{
      font-size: 1.15rem;
      font-weight: 800;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }}
    .portal-link {{
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 12px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      color: #fff;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 600;
      transition: all 0.2s;
    }}
    .portal-link:hover {{
      background: rgba(0, 240, 255, 0.2);
      border-color: var(--neon-cyan);
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
    }}
    .portals-grid {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }}
  </style>
</head>
<body>
  <header class="header">
    <div class="title-group">
      <h1>🎪 KREMFEST XR <span style="color:var(--neon-pink);">OBSERVATORY</span></h1>
      <span class="version-tag">{version}</span>
      <span style="color:#94a3b8; font-size:0.85rem;">{title}</span>
    </div>
    <div class="stats-row">
      <span class="stat-pill pill-qa">🧪 {counts['ready_for_qa']} Waiting QA</span>
      <span class="stat-pill pill-prog">🛠️ {counts['in_progress']} In Progress</span>
      <span class="stat-pill pill-done">🏆 {counts['completed']} Verified</span>
      <span class="stat-pill pill-meta">🎬 {total_projects} Master Projects</span>
    </div>
  </header>

  <div class="grid">
    <!-- Quick Nav Portals -->
    <div class="card">
      <h2 style="color:var(--neon-cyan);">🌐 Public Showcase Portals</h2>
      <div class="portals-grid">
        <a href="../index.html" class="portal-link">🎪 Master Home (/)</a>
        <a href="../2026/index.html" class="portal-link" style="border-color:var(--neon-pink);">⚡ 2026 Live Portal</a>
        <a href="../2026/vote/index.html" class="portal-link">🗳️ 2026 Audience Vote</a>
        <a href="../2025/index.html" class="portal-link">✨ 2025 Showcase</a>
        <a href="../2025/vote/index.html" class="portal-link">🏆 2025 Vote Archive</a>
        <a href="../2019/index.html" class="portal-link">📻 2019 Guide</a>
        <a href="../2018/index.html" class="portal-link">📜 2018 Archive</a>
        <a href="../2017/index.html" class="portal-link">🏛️ 2017 Genesis</a>
      </div>
      <div style="margin-top:16px;">
        <a href="https://filmfreeway.com/KremFest" target="_blank" class="portal-link" style="width:100%; justify-content:center; background:linear-gradient(135deg, #ff007f, #c026d3);">🚀 Live FilmFreeway Submission Season</a>
      </div>
    </div>

    <!-- Active Tasks Staged for QA -->
    <div class="card">
      <h2 style="color:var(--neon-yellow);">🧪 Waiting for QA (Verification)</h2>
      <ul style="list-style:none; padding:0;">
        {qa_list_html}
      </ul>
    </div>

    <!-- Active Roadmap -->
    <div class="card">
      <h2 style="color:var(--neon-green);">🛠️ Active & Upcoming Tasks</h2>
      <ul style="list-style:none; padding:0;">
        {prog_list_html}
      </ul>
    </div>

    <!-- Epigenetic Logs -->
    <div class="card">
      <h2 style="color:var(--neon-purple);">📜 Epigenetic Transmutation Logs</h2>
      {logs_html}
    </div>
  </div>

  <div style="margin-top:24px; padding-top:16px; border-top:1px solid var(--border); display:flex; justify-content:space-between; font-size:0.8rem; color:#64748b;">
    <div>Observed & Curated by VRMakerDome, UpLiftVR Studios & Symbiot AI</div>
    <div>Compiled via <code>symbiot-dashboard-scaffolder</code> • <a href="../tasks.md" style="color:var(--neon-cyan);">tasks.md</a> • <a href="../devlog.md" style="color:var(--neon-pink);">devlog.md</a></div>
  </div>
</body>
</html>"""

    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✨ KremFest XR Standalone Dashboard compiled to {out_path}")

if __name__ == "__main__":
    compile_hud()
