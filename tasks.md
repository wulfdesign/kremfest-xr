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

* [ ] 🛠️ 🔥🔥🔥 **Amazon Associates Account Setup & Link Activation:** Complete Amazon Associates affiliate account setup and tax/payout verification for tag `wulfdesign-20`. Once verified active and tracking correctly, re-enable the "🛒 View Meta Quest 3 on Amazon" button in `render_vr_hardware_guide()` in `private/submission_pipeline/tools/publish_to_public.py` and recompile public pages. (Temporarily paused in v0.1.49 while the Meta Referral link is verified live). 🛒 📦 🪙 🐈
* [ ] 🛠️ 🔥🔥🔥 **Field Broadcast Rig & Video Proxy Attractor Loop ("Attract Mode") Calibration:** Procure and configure standalone wireless spectator broadcast setup (dedicated 5GHz travel router + Chromecast/wireless HDMI stick + 2-port HDMI switcher + USB media player stick). Assemble a 60–90 second high-energy 1080p festival attractor reel (*Lunar Flyby XR*, *High Desert Eclipse*, *Max Q*, *Trip the Light*, *CONNECTOME* with on-screen "Step Inside" CTA) to display on venue screens whenever the headset is off, eliminating the intimidating black-box barrier. Conduct 72-hour burn-in and RF congestion test before festival load-in. 📺 🥽 🎬 🛠️ 🐈
* [ ] 🛠️ 🔥🔥 **GitHub Pages Analytics vs. Dedicated Tracking Server:** Implement client-side privacy-first UTM parameter logging (Cloudflare Web Analytics / zero-dependency UTM logger script) for the public GitHub Pages portal, and evaluate dedicated reverse-proxy server for server-side redirect logging. 🌐 📊 🛡️ 🐈
* [ ] 🛠️ 🕯️ **Archival Photo Integration:** Locate and stage any additional historical promo photos provided by DJ Julia or past curators into the retrospective galleries. 🐈

---

### 🧪 Waiting for QA (🧪)

* [ ] 🧪 🔥🔥🔥 **VIP Showcase Polish, Meta Store Connectome Key Art Scrape & Parietal Lab Verified Links (v0.1.52):** Polished VIP Industry Showcases on `index.html` and `2026/index.html`. Removed `(APP KEY RECEIVED)` and operational text from *Trip the Light: Let's Dance*, confirmed official selection badge, and embedded high-res key art. Cleaned Grant Hinkson's card to `🎟️ INVITED VIP SPOTLIGHT` and `Status: VIP Invitation Dispatched` (removing internal staging text). Scraped official 2560x1440 key art for *CONNECTOME* from Meta Quest Store CDN into `assets/images/2026/connectome_2026.jpg` (114 KB) and `assets/images/2026/constellations_2026.jpg` from Parietal Lab. Wired verified links with UTM tracking (Meta Quest Store, `ConnectomeGame.com`, `ParietalLab.com`, Grant's portfolio, LinkedIn). Updated Tab 6 in Dev HUD with quick links and bumped version across site and tools to `v0.1.52`. 🧪 🎨 🖼️ 🎟️ 🥽 🐈 ✨

* [ ] 🧪 🔥🔥🔥 **Trip the Light Official Selection Merge, Meta Store Key Art Scrape & Grant Follow-Up Studio (v0.1.51):** Merged *Trip the Light: Let's Dance* (Patrick Ascolese / Dark Arts Software) into `years.2026.selections` in `lineups.json`. Scraped official 1440x810 key art from the Meta Quest Store CDN into `assets/images/2026/trip_the_light_2026.jpg` (143 KB). Dynamically compiled selection into `index.html`, `2026/index.html`, and live 2026 Audience Choice Ballot (`2026/vote/index.html`). Updated VIP spotlight with confirmed status for Patrick and pending status for Grant. Authored follow-up message & Quest app key request for Grant Hinkson, integrated into Tab 6 with 1-click clipboard trigger, and synchronized version to v0.1.51. 🧪 🎮 🖼️ 🎟️ 🐈 ✨

* [ ] 🧪 🔥🔥🔥 **FilmFreeway Ingestion Pipeline Overhaul, Operator Step-by-Step Guide & 2026 Selections Rendering (v0.1.50):** Fixed dual-entry splitting bug in FilmFreeway parser (`\bProject:\s*` collision with `Student Project:No`), built intelligent deduplication in `merge_or_append_selection()`, extracted and optimized Artemis key art (`artemis_lunar_flyby_2026.jpg`), and cleanly ingested *Artemis: The Free Return* (KW2321). Upgraded Dev HUD Tab 1 with a 5-step visual operator workflow, enhanced staged cards with tracking/metadata and instant recompile triggers, enabled dynamic 2026 selections rendering across `index.html` and `2026/index.html`, and dynamically wired selections into the 2026 Audience Choice Ballot (`2026/vote/index.html`). Prepared enriched metadata pack for Patrick Ascolese's *Trip the Light: Let's Dance* VIP entry. 🧪 📥 🚀 🥽 🐈 ✨

* [ ] 🧪 🔥🔥🔥 **Hardware Recommendation Optimization & Verified Meta Referral Focus (v0.1.49):** Paused Amazon affiliate button until Associates account onboarding is verified; spotlighted confirmed live Meta Quest Referral link (`link-015`: `https://www.meta.com/referrals/link/wulfdesign/`) delivering $30–$60 digital store credit. Recompiled all static HTML portals via `publish_to_public.py`. 🧪 🎁 🥽 🛒 🐈 ✨

* [ ] 🧪 🔥🔥🔥 **2019 Oculus Go Retrospective, Equipment Defense Rider & Broadcast Specification (v0.1.48):** Documented the 2019 equipment loss incident (scratched lens & lost ring on friend's borrowed Oculus Go, requiring $100 out-of-pocket replacement from $600 gross earnings — 16.7% loss) in `collaborator_history_and_boundaries.md`. Formulated the zero-loaned-gear rule, mandatory silicone lens scratch protectors, promoter damage liability rider, and the $150/gig Sinking Fund. Engineered complete technical specification in `strategy_and_marketing/broadcast_and_attractor_proxy_specification.md` defining the dedicated 5GHz travel router, Chromecast casting, HDMI switcher, and looping attractor reel to eliminate attendee hesitation. 🧪 📺 🛡️ 🥽 🐈 ✨
* [ ] 🧪 🔥🔥🔥 **2025 Financial Ledger Ingestion ($500 Venmo) & Sovereign Outreach Doctrine (v0.1.47):** Documented Nicole Stone / Kremwerk payment ($500.00) via Venmo (`@LarryJamesWulf`, TxID `4435683501477441942`, dated 2025-10-03) for the 9-26 & 9-27 Kremfest VR showcase in `collaborator_history_and_boundaries.md`. Deducted ~$60.00 for late-night rideshare (Uber) and physical printing expenses (~$440.00 realized profit across 29.0 hours). Codified the Direct Audience Truth: attendees hugging Larry asking *"You made that?!"* as pure artistic validation. Codified total non-engagement with local XR cliques, outward outreach to non-XR festival crowds, and perpetual value capture through the permanent landing page. 🧪 🛡️ 🎟️ ❤️ 🐈
* [ ] 🧪 🔥🔥🔥 **SLICE & PAX 2026 VIP Spotlight & VR Hardware Affiliate Funnel (v0.1.46):** Integrated invited VIP game showcase section featuring *Trip the Light: Let's Dance* (Patrick Ascolese / Dark Arts Software) and *CONNECTOME* & *CONSTELLATIONS* (Grant Hinkson / Parietal Lab) with partner attribution UTM tracking (`link-013`). Integrated VR hardware recommendation card for Meta Quest 3 on Amazon (`link-014`) and Meta Device Referral (`link-015`) with FTC disclosure across `index.html` and `2026/index.html`. Recompiled static site locally. 🧪 🎟️ 🥽 🛒 🐈
* [ ] 🧪 🔥🔥🔥 **Sovereign Traffic Attribution & Experience Link Integration (v0.1.45):** Integrated canonical tracked campaign links (`link-010` for Meta Quest Store & `link-011` for WebXR Portal) into `index.html`, `2026/index.html`, and generated vector SVG QR codes for floor kiosks and programs. Tested locally on `http://localhost:3039/`. 🧪 🎪 🥽 🔗 🐈

---

---

### 🧠 Human-in-the-Loop (HITL) Operations

* [ ] 🧠 🔥 **HITL: FilmFreeway Active Season Link:** Verify FilmFreeway 2026 submission deadlines and category pricing matches the online live portal. 🧙‍♂️ 🐈
* [ ] 🧠 🔥 **HITL: GitHub Pages Deployment:** Configure repository remote and publish `projects/kremfest-xr` to `https://wulfdesign.github.io/kremfest-xr/`. 🧙‍♂️ 🐈
* [ ] 🧠 🕯️ **HITL: 360 Video Archive Assets:** Review and select 360 footage clips filmed by J. Jackson during KremFest 2018 for private staging. 🧙‍♂️ 🐈

---

### 🔮 Future Expansion & Icebox (🧊)

* [ ] 🧊 📸 **Historical Retrospective Photo Gallery Integration (2018 & 2017 Archives):** Curate and stage authentic crowd/floor/atmosphere retrospective photography from past festival runs into designated atmosphere gallery sections above the footer. 📸 🎪 🥽 🐈
* [ ] 🧊 🎭 **WebXR In-Browser 360 Player:** Embed lightweight Three.js / WebXR 360° video panoramic viewer directly into the submission breakout modal cards so attendees on mobile/desktop can look around scenes without external video player redirects. 🐈
* [ ] 🧊 🏗️ **Automated FilmFreeway Scraper / Webhook Integration:** Connect headless browser ingestion to pull live incoming submissions directly into `private/submission_pipeline/data/`. 🐈

---

### 🏆 Completed Tasks (Verified by Magus Wulf)

* [x] 🏆 🏗️ 🔥🔥🔥 **2017 Genesis Lineage Integration (David Ayala / Kinetoscope VR / #neoK / 4Culture - v0.1.6):** Fully integrated historical 2017 genesis archive detailing David Ayala's curation, PSVR hardware setup, 4Culture Tech Specific sponsorship, Julia PlanetDisco trailer highlights, and featured selections (*Shameful Conquest* by Dr. Sarah Jones & Steve Dawkins and *Heart of Fartness* by Lloyd Kaufman/Troma). 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **Versioning, 2017 Kinetoscope VR Lineage & Identity Alignment (v0.1.5):** Synchronized `README.md` to `v0.1.5`, credited Kinetoscope VR (#neoK) & 4Culture for the 2017 inaugural edition, standardized attribution strictly to Larry James, and recompiled both the standalone and ecosystem dashboards. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **Official 2026 Kremfest Poster Integration (v0.1.4):** Fetched official 2026 Kremfest flyer asset directly from Kremwerk's server (`kremfest_09-25_26-26_lineup_kremwerk.jpg`) and integrated into `assets/images/2026/kremfest_2026_poster.jpg`, `lineups.json`, `index.html`, and `2026/index.html`. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **2026 "More Submissions Coming Soon" Callout Block (v0.1.4):** Positioned dedicated callout block directly after headliners on `2026/index.html` and master `index.html` with FilmFreeway direct link, fee tiers ($5 Earlybird / $10 Regular), and key deadlines (Aug 31 Earlybird, Sept 21 Regular, Sept 25–27 Festival). 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **Uncropped Image Scaling Fix (v0.1.4):** Eliminated `object-fit: cover` and fixed pixel height caps across `style.css`, ensuring all banners, posters, and key art scale with natural aspect ratios across desktop and mobile. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **PDF Screenshot Layout Calibration (v0.1.4):** Calibrated all static pages to match the 16 screenshots from `private/import/screenshots_of_2025/` (bold centered section titles, italic centered bylines, indented bold loglines, italic press quotes with attribution, bulleted tech specs, and centered inline action links with middle dots `•`). 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **Program Guide Editorial Layout Overhaul (PDF & Google Docs Match - v0.1.3):** Transmuted all static portals (`index.html`, `2026/`, `2025/`, `2019/`, `2018/`, `2017/`) into full rich editorial festival program guides matching the Google Docs/PDF formatting in dark mode with responsive mobile/desktop layouts, high-res posters, trailer buttons, creator links, quotes, and 'Lineup at a Glance' summaries. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **Initial Dual-Repository Architecture & Hermetic Isolation:** Initialized independent public (`projects/kremfest-xr`) and private (`projects/kremfest-xr/private`) Git repositories with strict `.gitignore` wards. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥🔥 **Public Multi-Year Showcase Portals (v0.1.2):** Built and compiled static portals for Home (`/index.html`), 2026 Live Submissions (`/2026/`), 2025 Retrospective (`/2025/`), 2019 Guide (`/2019/`), 2018 Retrospective (`/2018/`), and 2017 Genesis Archive (`/2017/`). 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥 **Audience Choice Voting Ballots:** Deployed client-side interactive voting ballots for 2026 (`/2026/vote/`) and 2025 (`/2025/vote/`) with local storage persistence and QR placards. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥🔥 **1-Click Preview Webserver (`serve.bat` on Port 3039):** Deployed zero-dependency public static preview server in `projects/kremfest-xr/` on Port 3039 with automatic browser launch. 🏆 🧙‍♂️ 🐈
* [x] 🏆 🏗️ 🔥 **Public Repository Grimoires:** `README.md`, `tasks.md`, `devlog.md`, `chatHandOff.md`, `.gitignore`. 🏆 🧙‍♂️ 🐈

