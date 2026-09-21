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

* [ ] 📢 🎪 🔥🔥🔥 **Festival Announcement: Lunar Flyby XR Hands-Free Autopilot Mode ("Sit Back & Enjoy the Ride"):** Publish community, social, and festival announcement highlighting the new *Lunar Flyby XR* Early Access Alpha update. Emphasize that guests can step into the Meta Quest 3, sit back in the commander's seat, and experience the full Newtonian voyage from Earth orbit around the Moon to ocean splashdown hands-free in ~16 minutes—or disengage autopilot at any moment to take manual command. 🚀 🌕 🎪 🥽 🐈
* [ ] 🛠️ 🔥🔥🔥 **Festival Sizzle Reel Video Ingestion & Concatenation (v0.1.74 / Day 3–4):** Gather and cut 1080p clips into `private/video_staging/clips/` following `sizzle_reel_manifest.json` (90s target duration across 10 experiences), render animated title/outro cards, and encode H.264/AAC master attractor loop for the venue TV. 🎬 🥽 📺 🛠️ 🐈
* [ ] 🛠️ 🔥🔥🔥 **Maiden Flight: Responsive 360 Landing Page, SIFF Laurels & Early Access Spool-Up:** Initialize `projects/maiden-flight` workspace with Symbiotic Ecology architecture, modern responsive static landing page featuring SIFF 2018 laurels, KING 5/Seattle Times quotes, embedded responsive 360 YouTube trailer (`youtu.be/FHIc24WiViY`), early access email sign-up box, and tracked campaign links. (Scheduled Day 4: Fri Sep 18). 🎈 🎬 🎟️ 🛠️ 🐈
* [ ] 🛠️ 🔥🔥🔥 **Amazon Associates Account Setup & Link Activation:** Complete Amazon Associates affiliate account setup and tax/payout verification for tag `wulfdesign-20`. Once verified active and tracking correctly, re-enable the "🛒 View Meta Quest 3 on Amazon" button in `render_vr_hardware_guide()` in `private/submission_pipeline/tools/publish_to_public.py` and recompile public pages. (Temporarily paused in v0.1.49 while the Meta Referral link is verified live). 🛒 📦 🪙 🐈
* [ ] 🛠️ 🔥🔥🔥 **Field Broadcast Rig & Video Proxy Attractor Loop ("Attract Mode") Calibration:** Procure and configure standalone wireless spectator broadcast setup (dedicated 5GHz travel router + Chromecast/wireless HDMI stick + 2-port HDMI switcher + USB media player stick). Assemble a 60–90 second high-energy 1080p festival attractor reel (*Lunar Flyby XR*, *High Desert Eclipse*, *Max Q*, *Trip the Light*, *CONNECTOME* with on-screen "Step Inside" CTA) to display on venue screens whenever the headset is off, eliminating the intimidating black-box barrier. Conduct 72-hour burn-in and RF congestion test before festival load-in. 📺 🥽 🎬 🛠️ 🐈
* [ ] 🛠️ 🔥🔥 **GitHub Pages Analytics vs. Dedicated Tracking Server:** Implement client-side privacy-first UTM parameter logging (Cloudflare Web Analytics / zero-dependency UTM logger script) for the public GitHub Pages portal, and evaluate dedicated reverse-proxy server for server-side redirect logging. 🌐 📊 🛡️ 🐈
* [ ] 🛠️ 🕯️ **Archival Photo Integration:** Locate and stage any additional historical promo photos provided by DJ Julia or past curators into the retrospective galleries. 🐈
* [ ] 🛠️ 🕯️ **Published Site QR Code Display Toggle / Configuration:** Implement an opt-in/opt-out configuration flag or subtle client-side control to selectively disable/enable on-screen QR codes in the published static build (providing a cleaner layout alternative for environments where QR codes are unneeded or deemed too dense). 🎴 🎛️ 🐈

---

### 🧪 Waiting for QA (🧪)

* [ ] 🧪 🔥🔥🔥 **Lunar Flyby XR: KremFest XR 2026 Autopilot & Auto-Warp Experience (v2.1.19):** Promoted and verified turnkey passive-first cinematic autopilot mode for festival attendees. Features intelligent Auto-Warp with 1.0s Hermite cubic smoothstep rate gliding, compressing the ~800,000 km cislunar round trip into a calibrated ~16–17 minute flight (empirically confirmed in `Artemis_FlightLog_2026-09-21T22-34-08.json` at 16:45.2). Includes 60x perilune sizzle shot flyby within 5,500 km, automated 12.3G re-entry keyhole guidance, 10x parachute descent auto-ramp, and full manual override (`AUTO WARP: OFF`) for pilot speedrunners. Cleaned LaTeX delimiters across public docs and published to GitHub (`https://github.com/wulfdesign/lunar-flyby-xr.git`). 🚀 🌕 🎪 🥽 🧪 🐈

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

