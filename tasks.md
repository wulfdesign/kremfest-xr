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

* [ ] 🧪 🔥🔥🔥 **Center-Aligned Multi-Year "Showcase at a Glance" & 2018 1-Line Selections Calibration (v0.1.98):** Centered `.glance-section`, `.glance-title`, and `.glance-bullets` with clean disc-free alignment in `assets/css/style.css`, applying universally across 2026, 2025, 2019, 2018, and 2017. Calibrated 2018 entries (`GLANCE_ENTRIES_2018`) in `publish_to_public.py` to ensure each item renders on exactly ONE line with zero spill-overs. Recompiled `private/dev_site/` and verified with headless browser captures. Staged locally for review. 🧪📐📜✨ 🧪 🐈

* [ ] 🧪 🔥🔥🔥 **2x Retina Social One-Sheet Rerender, Uncropped Poster Framing & 12-Slide Floor Loop Slideshow Engine (v0.1.97):** Re-rasterized `kremfest_xr_2026_lineup_one_sheet.png` and `lineup_social_card_clean.png` at 2x Retina resolution (2400 × 1840 px) with razor-sharp typography and vector gold laurels. Upgraded `splash_cards.html` and `render_splash_cards.py` with 12-slide sequence: Slide 1 (KremFest 2026 Poster & Festival Intro), Slide 2 (Lineup at a Glance Retina one-sheet & Audience Choice voting QR), and Slides 3–12 (10 individual showcase cards). Re-engineered poster display with `object-fit: contain` and ambient blurred background, eliminating all bottom poster cutoff across vertical artwork (*We Are Dead Animals*, *Firedrake VR*). Implemented 10-second default slide rotation with active real-time countdown ticker (`10s... 1s`), top animated neon progress bar, and interactive duration settings (`5s`, `8s`, `10s`, `15s`, `20s`, `Prev`, `Pause / Resume`, `Next`, fullscreen hotkeys). Synchronized Dev HUD Tab 14 on Port 3040. Staged locally for review. 🧪🎬🎴⏱️ 🧪 🐈
* [ ] 🧪 🔥🔥🔥 **Dev Sandbox Mirror on Port 3040, Numbered Navigation Hierarchy, Lineup at a Glance Layout Synchrony & Social Media One-Sheet Studio (v0.1.96):** Established air-gapped Dev Sandbox (`private/dev_site/`) served directly on Port 3040 under `/dev/` and `/dev/2026/` to protect public Port 3039 from layout experimentation. Numbered all 15 Dev HUD tabs explicitly (`1. 📥 Ingest` through `15. 🔒 Sanctuary`). Moved "Lineup at a Glance" block on 2025 and 2026 to top immediately before Headliners, matching 2018/2019 precedent. Built 1-page 1200px social media card (`social_lineup_card.html`) with 2026 Gold Laurels, QR code, and 10 mini cards, equipped with 1-click 2x Retina PNG download (`html2canvas.min.js`), clipboard copy, and direct studio embedding in Tab 6. Verified clean render and saved master image (`assets/images/2026/kremfest_xr_2026_lineup_one_sheet.png`). Staged locally for review. 🧪🎴📸🎨 🧪 🐈
* [ ] 🧪 🔥🔥🔥 **2026 Laurels Vector Calibration, Algoriddim djay Executive Delivery, Dimitri Vallein Response & Final Lineup Social Launch Suite (v0.1.95):** Synchronized Magus Wulf's refined 2026 vector laurels and high-resolution PNGs across public and private asset trees. Authored Algoriddim djay executive letter delivering 2026 laurels and VIP passes. Authored respectful, professional declination response for Dimitri Vallein regarding *The Last Star VR* (protecting standalone Quest 3 floor stability 48 hours prior to doors). Authored agency-grade LinkedIn and Facebook final lineup launch posts with targeted Seattle group cross-posting map. Codified pre-festival 48-hour hardware/web triage roadmap. Staged locally for review. 🏆🎧✉️📢 🧪 🐈
* [ ] 🧪 🔥🔥🔥 **Submissions Closed Callout Modernization & Festival Premiere Countdown Alignment (v0.1.94):** Transmuted the "More Selections Coming Soon" callout block into "Submissions Closed — Festival Premiere Ahead!" across homepage and 2026 subpage. Kept live purple countdown running to Friday Sept 25 10:00 PM PDT, added strikethrough + `[CLOSED]` badges to past deadlines, updated `main.js` countdown subtext, and converted CTA to dual Official Passes and FilmFreeway archive buttons. Staged for local empirical inspection prior to push. 🎬⏳🎟️ 🧪 🐈
* [ ] 🧪 🔥🔥🔥 **KremFest XR Live Lineup Promotion, Official Selection Laurels Suite & Creator Notification Engine (v0.1.93):** Promoted *Firedrake VR: The Wizard's Warren Demo* and *We Are Dead Animals* to live catalog (`lineups.json`) following in-headset Quest 3 verification. Updated Firedrake with exploration alpha demo text. Recompiled all 8 public pages, Audience Choice ballot, staging preview, and Dev HUD. Generated 2026 Official Selection Laurels Suite (PNG/SVG in Gold, White, Cyan, Black) and embedded 1-click FilmFreeway notification cards into Dev HUD Tab 1 on Port 3040. Staged for local empirical inspection prior to remote push. 🐉🐾🏆🎟️ 🧪 🐈
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

