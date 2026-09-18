# 📋 KremFest XR — Tasks & Alchemical Roadmap

**⚠️ CRITICAL INSTRUCTION FOR AI AGENTS ⚠️**

DO NOT mark any task as done (🏆 or [x]) until the Human-in-the-Loop (Magus Wulf) has explicitly verified the output and given permission to check it off. If you finish a coding or writing task, change its status to 🧪 and move it to the "Waiting for QA" section. Use your Attribution Mark (🧙‍♂️/🐈/🦞) when signing off.

---

### 📖 Legend

* **Priority:** 🔥🔥🔥 (Inferno/Critical) | 🔥🔥 (High Activity) | 🔥 (Medium/Warm) | 🕯️ (Candle/Active) | 🧊 (Cold/Chilled) | ❄️ (Frozen/Frost)
* **Model Routing:** 🏗️ (Architect/Gemini Pro) | ⚡ (Runner/Gemini Flash) | 🎭 (Local/Ollama - Offline)
* **Status:** 🛠️ (In Progress) | 🧪 (Ready for QA) | 🧠 (HITL Action Needed) | 🐛 (Bug) | 🩹 (Tech Debt) | 🏆 (Verified/Done)
* **Attribution:** 🧙‍♂️ (Magus Wulf - Grand Alchemist / HITL) | 🐈 (Hermes - Architect/Orchestrator) | 🦞 (MugWort - Worker/Terminal)


---

### 🛠️ Active Roadmap & Tasks (🛠️)

* [ ] 🛠️ 🔥🔥🔥 **Festival Sizzle Reel Video Ingestion & Concatenation (v0.1.74 / Day 3–4):** Gather and cut 1080p clips into `private/video_staging/clips/` following `sizzle_reel_manifest.json` (90s target duration across 10 experiences), render animated title/outro cards, and encode H.264/AAC master attractor loop for the venue TV. 🎬 🥽 📺 🛠️ 🐈
* [ ] 🛠️ 🔥🔥🔥 **Lunar Flyby XR: Auto-Ramp ("Film Mode"), Splashdown Flight Guidance & Dynamic Reticle:** Implement cinematic speed auto-ramp curve after mid-course correction burns, automated re-entry flight guidance for guaranteed splashdown corridor, and interactive trajectory alignment reticle (grey target vector, red-to-green alignment agency) in `projects/lunar-flyby-xr/` for festival floor comfort. (Scheduled Day 3: Thu Sep 17). 🚀 🌌 🥽 🛠️ 🐈
* [ ] 🛠️ 🔥🔥🔥 **Maiden Flight: Responsive 360 Landing Page, SIFF Laurels & Early Access Spool-Up:** Initialize `projects/maiden-flight` workspace with Symbiotic Ecology architecture, modern responsive static landing page featuring SIFF 2018 laurels, KING 5/Seattle Times quotes, embedded responsive 360 YouTube trailer (`youtu.be/FHIc24WiViY`), early access email sign-up box, and tracked campaign links. (Scheduled Day 4: Fri Sep 18). 🎈 🎬 🎟️ 🛠️ 🐈
* [ ] 🛠️ 🔥🔥🔥 **Amazon Associates Account Setup & Link Activation:** Complete Amazon Associates affiliate account setup and tax/payout verification for tag `wulfdesign-20`. Once verified active and tracking correctly, re-enable the "🛒 View Meta Quest 3 on Amazon" button in `render_vr_hardware_guide()` in `private/submission_pipeline/tools/publish_to_public.py` and recompile public pages. (Temporarily paused in v0.1.49 while the Meta Referral link is verified live). 🛒 📦 🪙 🐈
* [ ] 🛠️ 🔥🔥🔥 **Field Broadcast Rig & Video Proxy Attractor Loop ("Attract Mode") Calibration:** Procure and configure standalone wireless spectator broadcast setup (dedicated 5GHz travel router + Chromecast/wireless HDMI stick + 2-port HDMI switcher + USB media player stick). Assemble a 60–90 second high-energy 1080p festival attractor reel (*Lunar Flyby XR*, *High Desert Eclipse*, *Max Q*, *Trip the Light*, *CONNECTOME* with on-screen "Step Inside" CTA) to display on venue screens whenever the headset is off, eliminating the intimidating black-box barrier. Conduct 72-hour burn-in and RF congestion test before festival load-in. 📺 🥽 🎬 🛠️ 🐈
* [ ] 🛠️ 🔥🔥 **GitHub Pages Analytics vs. Dedicated Tracking Server:** Implement client-side privacy-first UTM parameter logging (Cloudflare Web Analytics / zero-dependency UTM logger script) for the public GitHub Pages portal, and evaluate dedicated reverse-proxy server for server-side redirect logging. 🌐 📊 🛡️ 🐈
* [ ] 🛠️ 🕯️ **Archival Photo Integration:** Locate and stage any additional historical promo photos provided by DJ Julia or past curators into the retrospective galleries. 🐈
* [ ] 🛠️ 🕯️ **Published Site QR Code Display Toggle / Configuration:** Implement an opt-in/opt-out configuration flag or subtle client-side control to selectively disable/enable on-screen QR codes in the published static build (providing a cleaner layout alternative for environments where QR codes are unneeded or deemed too dense). 🎴 🎛️ 🐈

---

### 🧪 Waiting for QA (🧪)

* [ ] 🧪 🔥🔥🔥 **DJ Julia Camp Lineup Status Update & Technical Testing Check-In Suite (v0.1.91):**
  1. **Curatorial Status Report Email to DJ Julia:** Authored warm, collaborative check-in to DJ Julia Camp (`djjulia@gmail.com` / `dj.julia.camp@...`) detailing active live lineup on `2026/index.html`, inclusion of *djay by Algoriddim* on Quest 3 with live spectator casting, and FilmFreeway regular deadline closing Monday Sept 21.
  2. **Technical Testing & Setup Window:** Scheduled Sunday & Monday testing window covering standalone Quest 3 floor calibration, Quest 2 backup readiness, and latency-free TV spectator projection.
  3. **Staging Vault Candidate Adjudication:** Communicated holding pattern for *Firedrake VR* (awaiting Jon Stone's explore mode APK) and *We Are Dead Animals* (in-headset comfort/runtime evaluation) with goal of graduating both to lineup by Monday.
  4. **Private Sanctuary & 1-Click Dev HUD Integration:** Authored `private/operations/email_draft_dj_julia_lineup_update.md`, integrated dedicated correspondence card with 1-click clipboard copy buttons into Dev HUD Tab 8 (`render_festival_ops.py`), and recompiled `dev_dashboard/index.html`. 🧪 📧 🤝 🥽 ⚡ 🐈 ✨

* [ ] 🧪 🔥🔥🔥 **djay by Algoriddim Lineup Announcement Suite, Social Posts & Executive Follow-Up Letter (v0.1.90):**
  1. **LinkedIn Campaign Pack (Post 23):** Formulated professional agency-grade announcement celebrating Algoriddim's addition to the KremFest XR 2026 lineup on Meta Quest 3, featuring optical hand tracking, MR passthrough, TV spectator casting, live lineup link, and urgency countdown for the FilmFreeway deadline closing Monday, Sept 21 at 23:59 PDT. Full hashtags included.
  2. **Facebook Nightlife Campaign (Post 24):** Crafted punchy, high-engagement community post tailored for Seattle nightlife, local DJs, and creative technologists with virtual turntable highlights, spectator screen setup, and final 72-hour call for immersive shorts.
  3. **Executive Follow-Up & Lineup Letter to Algoriddim:** Authored formal executive thank you letter for Richard (Ticket #259545) & Karim Morsy confirming Quest keys calibrated, live portal placement, tracked Meta Horizon Store QR campaign (`utm_source=kremfest_xr&utm_medium=festival_showcase&utm_campaign=kremfest_2026_curated`), and post-festival floor footage reporting.
  4. **Private Sanctuary Integration & 1-Click HUD Triggers:** Compiled dedicated standalone document (`private/strategy_and_marketing/djay_algoriddim_announcement_and_followup.md`), appended Phase 5.5 to `social_media_campaign_launch_2026.md`, upgraded Dev HUD Tab 10 (`render_sidequest.py`), and wired Posts 23 & 24 with 1-click clipboard triggers in Dev HUD Tab 6 (`build_social_hub.py`). 🧪 🎧 🎛️ 📢 ✉️ 🥽 🐈 ✨

---

### 🧠 Human-in-the-Loop (HITL) Operations

* [ ] 🧠 🔥 **HITL: FilmFreeway Active Season Link:** Verify FilmFreeway 2026 submission deadlines and category pricing matches the online live portal. 🧙‍♂️ 🐈
* [x] 🧠 🔥 **HITL: GitHub Pages Deployment (Completed v0.1.57):** Pushed commit `497364a` cleanly to `https://github.com/wulfdesign/kremfest-xr.git` on branch `main`. Live portals active at `https://wulfdesign.github.io/kremfest-xr/` and `https://wulfdesign.github.io/kremfest-xr/2026/` featuring Grant Hinkson's 3-experience suite, Patrick Ascolese's *Trip the Light*, and all 7 experiences on the live ballot. 🧙‍♂️ 🐈 🚀
* [ ] 🧠 🕯️ **HITL: 360 Video Archive Assets:** Review and select 360 footage clips filmed by J. Jackson during KremFest 2018 for private staging. 🧙‍♂️ 🐈

---

### 🔮 Future Expansion & Icebox (🧊)

* [ ] 🧊 📸 **Historical Retrospective Photo Gallery Integration (2018 & 2017 Archives):** Curate and stage authentic crowd/floor/atmosphere retrospective photography from past festival runs into designated atmosphere gallery sections above the footer. 📸 🎪 🥽 🐈
* [ ] 🧊 🎭 **WebXR In-Browser 360 Player:** Embed lightweight Three.js / WebXR 360° video panoramic viewer directly into the submission breakout modal cards so attendees on mobile/desktop can look around scenes without external video player redirects. 🐈
* [ ] 🧊 🏗️ **Automated FilmFreeway Scraper / Webhook Integration:** Connect headless browser ingestion to pull live incoming submissions directly into `private/submission_pipeline/data/`. 🐈

