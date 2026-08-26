# 📋 KremFest XR — Tasks & Alchemical Roadmap

**⚠️ CRITICAL INSTRUCTION FOR AI AGENTS ⚠️**

DO NOT mark any task as done (🏆 or [x]) until the Human-in-the-Loop (Magus Wulf) has explicitly verified the output and given permission to check it off. If you finish a coding or writing task, change its status to 🧪 and move it to the "Waiting for QA" section. Use your Attribution Mark (🐈/🦞) when signing off.

---

### 📖 Legend

* **Priority:** 🔥🔥🔥 (Inferno/Critical) | 🔥🔥 (High Activity) | 🔥 (Medium/Warm) | 🕯️ (Candle/Active) | 🧊 (Cold/Chilled) | ❄️ (Frozen/Frost)
* **Model Routing:** 🏗️ (Architect/Gemini Pro) | ⚡ (Runner/Gemini Flash) | 🎭 (Local/Ollama - Offline)
* **Status:** 🛠️ (In Progress) | 🧪 (Ready for QA) | 🧠 (HITL Action Needed) | 🐛 (Bug) | 🩹 (Tech Debt) | 🏆 (Verified/Done)
* **Attribution:** 🐈 (Hermes - Architect/Orchestrator) | 🦞 (MugWort - Worker/Terminal)

---

### 🛠️ Active Roadmap & Tasks (🛠️)

* [ ] 🛠️ 🔥🔥 **Lineup Aesthetic Polish (Google Docs & Legacy Archive Match):** Refine and style the lineup cards and schedule layouts across 2018, 2019, 2025, and 2026 to match the exact visual presentation, headings, and formatting from the original Google Docs program guides and legacy .html archive styling. 🐈
* [ ] 🛠️ 🕯️ **Archival Photo Integration:** Locate and stage the 2 initial promo photos provided by DJ Julia for KremFest promo banners and historical retrospective galleries. 🐈

---

### 🧪 Waiting for QA (🧪)

* [ ] 🧪 🏗️ 🔥🔥🔥 **Initial Dual-Repository Architecture & Hermetic Isolation:** Initialized independent public (`projects/kremfest-xr`) and private (`projects/kremfest-xr/private`) Git repositories with strict `.gitignore` wards. 🧪 🐈
* [ ] 🧪 🏗️ 🔥🔥🔥 **Public Multi-Year Showcase Portals (v0.1.2):** Built and compiled static portals for Home (`/index.html`), 2026 Live Submissions (`/2026/`), 2025 Retrospective (`/2025/`), 2019 Guide (`/2019/`), 2018 Retrospective (`/2018/`), and 2017 Genesis Archive (`/2017/`). 🧪 🐈
* [ ] 🧪 🏗️ 🔥🔥 **Audience Choice Voting Ballots:** Deployed client-side interactive voting ballots for 2026 (`/2026/vote/`) and 2025 (`/2025/vote/`) with local storage persistence and QR placards. 🧪 🐈
* [ ] 🧪 🏗️ 🔥🔥 **1-Click Preview Webserver (`serve.bat` on Port 3039):** Deployed zero-dependency public static preview server in `projects/kremfest-xr/` on Port 3039 with automatic browser launch. 🧪 🐈
* [ ] 🧪 🏗️ 🔥 **Public Repository Grimoires:** `README.md`, `tasks.md`, `devlog.md`, `chatHandOff.md`, `.gitignore`. 🧪 🐈


---

### 🧠 Human-in-the-Loop (HITL) Operations

* [ ] 🧠 🔥 **HITL: FilmFreeway Active Season Link:** Verify FilmFreeway 2026 submission deadlines and category pricing matches the online live portal. 🐈
* [ ] 🧠 🔥 **HITL: GitHub Pages Deployment:** Configure repository remote and publish `projects/kremfest-xr` to `https://wulfdesign.github.io/kremfest-xr/`. 🐈
* [ ] 🧠 🕯️ **HITL: 360 Video Archive Assets:** Review and select 360 footage clips filmed by J. Jackson during KremFest 2018 for private staging. 🐈

---

### 🔮 Future Expansion & Icebox (🧊)

* [ ] 🧊 🎭 **WebXR In-Browser 360 Player:** Embed lightweight Three.js / WebXR 360° video panoramic viewer directly into the submission breakout modal cards so attendees on mobile/desktop can look around scenes without external video player redirects. 🐈
* [ ] 🧊 🏗️ **Automated FilmFreeway Scraper / Webhook Integration:** Connect headless browser ingestion to pull live incoming submissions directly into `private/submission_pipeline/data/`. 🐈

---

### 🏆 Completed Tasks

*(Historical completed tasks will be moved here upon explicit Magus Wulf verification)*
