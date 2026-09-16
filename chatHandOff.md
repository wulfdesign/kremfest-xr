# 📌 Chat Hand-Off & Project State — KremFest XR (v0.1.67)

> **Familiar Anchor:** Hermes (`🐈`) & Magus Wulf (`🧙‍♂️🐺✨`)  
> **Workspace Root:** `C:/Agents/a0-symbiot-ai/projects/kremfest-xr`  
> **Project Version:** `v0.1.67` (Public & Private Sanctuary Synchronized)  
> **Date:** September 15, 2026 | 19:10 PDT  
> **GitHub Remote:** `https://github.com/wulfdesign/kremfest-xr.git` (Local repository `v0.1.67` ready for QA; do not push to public GitHub `main` until verified)  
> **Local Servers:** Public Preview: Port 3039 (`http://localhost:3039/2026/index.html`) | Private Dev HUD: Port 3040 (`http://localhost:3040/`)

---

## 🏛️ Active Alchemical Victories & Current State

1. **Firedrake VR Staged Poster Integration, Waiver-Free Correspondence & Quick Phone SMS Hub (v0.1.67):**
   - Ingested official key art poster for Jon Stone / *Firedrake VR (Wizard's Warren)* from `private/import/2026/FireDrake-Wizards-Warren_poster.jpg` into `assets/images/2026/firedrake_wizards_warren_2026.jpg`.
   - Updated `private/submission_pipeline/data/staging_vault.json`: linked image `/assets/images/2026/firedrake_wizards_warren_2026.jpg`, set `key_art: true`, and confirmed `filmfreeway_waiver: true` (standard entry fee paid). Elevated candidate readiness score to **83% (5/6 deliverables verified)**.
   - Purged all waiver code mentions (`KremFestSeaIndieVR2026`) from Firedrake's correspondence across Tab 2 and Tab 7. Tailored email to acknowledge his FilmFreeway entry (`KW2319`) and directly request a Meta Quest App Key (or Release Channel invite) or APK download link before the Sept 21 deadline for floor headset testing.
   - Upgraded Dev HUD Tab 2 (`renderStagedCards()`) to detect candidate phone numbers (`208-627-3059`) and render a prominent **Option 2: Quick Phone Text Message (SMS)** box with a 1-click `📋 Copy SMS Text` clipboard button directly on the candidate card.
   - Recompiled `dev_dashboard/index.html`, validated syntax with Node.js `vm.Script` (100% clean), and confirmed both candidates (*Firedrake VR* and *We Are Dead Animals*) remain 100% air-gapped from public festival lineups.

2. **Air-Gapped Candidate Staging: "We Are Dead Animals" & Staging Vault UI Upgrade (v0.1.66):**
   - Ingested official FilmFreeway submission `KW2320`: *We Are Dead Animals* (directed by Dutch animation and XR artist Tote Tiere Maarten / Maarten Isaäk de Heer; Netherlands/Germany; world premiere in competition at IDFA DocLab 2025).
   - Preserved 100% air-gap from public lineups (`lineups.json` and static HTML pages untouched) while Larry downloads the APK for local Quest 3 sideload testing.
   - Initialized deliverable readiness score to **83% (5/6 deliverables completed)**:
     - 🥽 `app_key`: false (standalone Quest APK downloaded; awaiting in-headset test)
     - 🖼️ `key_art`: true (official high-res poster copied and staged into `assets/images/2026/we_are_dead_animals_2026.jpg`)
     - 📝 `synopsis`: true (full overview, logline, and variable 15–25 min eating survival mechanics)
     - 👤 `creator_bio`: true (comprehensive artist bio and full creative credits)
     - ⏱️ `runtime_comfort`: true (15:00–19:00 variable runtime, comfortable)
     - 🎟️ `filmfreeway_waiver`: true (official KW2320 entry in Kremfest VR Experience category)
   - Enhanced Dev HUD Tab 2 (`🧪 Incomplete Staging Vault`) in `build_social_hub.py` to dynamically render poster thumbnails (`imageHtml`), festival laurels/awards (`awardsHtml`), and 1-click external resource pill buttons (`linksHtml`) for the Vimeo trailer, gameplay video, Dropbox assets/build folder, website, and Instagram.
   - Recompiled `dev_dashboard/index.html`, validated syntax with Node `vm.Script` (100% clean), and verified `/api/staging` returning 2 staged candidates (`KW2319` and `KW2320`).

2. **Transport, Gear Segregation & Amazon Prime Supply Logistics Hub (v0.1.65):**
   - Engineered modular generator `render_transport.py` deploying Tab 13 (`🛴 Transport & Gear Logistics`) in the Private Dev HUD (Port 3040).
   - Codified Solo Operator 1-Headset Protection Doctrine: To eliminate equipment damage/theft liability (*"it'll break me if something happens to anything"*), Larry operates solo with 1 active floor headset (Meta Quest 3) with 1:1 supervision, supported by 1 immediate standby headset (Meta Quest 2) on the bench.
   - Realigned floor operations to core 3-hour peak club energy window: **10:00 PM – 1:00 AM**, followed by a calm 30-minute strike (1:00 AM – 1:30 AM), eliminating sleep-deprived 4:00 AM exhaustion and enabling safe transit.
   - Formulated Friday Overnight Gear Segregation Strategy Matrix:
     - *Option Alpha (Backpack Mobile - Recommended):* High-value/recharge-critical items (Laptop + power supply, Meta Quest 3, 3x USB-C PD power banks) travel home in backpack to recharge at the boat. Medium wheeled luggage cart containing Quest 2 backup, fairy lights, cables, and wipes remains safely locked at Kremwerk (in locked office/closet).
     - *Option Beta (Full Rollout):* Everything packs into wheeled cart + backpack and travels home via Uber if venue lockup is unavailable.
     - *Sit-Down Lime Scooter Bungee Trial Run:* Formulated protocol for testing the luggage cart bungeed to the front footboard deck of a sit-down Lime scooter when moving gear between storage and the boat bench on Day 2 (Wed Sept 16).
   - Built Interactive 2-Night Rideshare Surge Budget Calculator:
     - Real-time calculator demonstrating that the upgraded **$750.00 Option A honorarium** ($375/night; `private/operations/compensation_and_invoice_memo.md`) cleanly absorbs all late-night rideshare surges ($80–$140 buffer) and $75 in supplies while delivering $565.00 net realized compensation.
     - Added bank account liquidity reminder for upfront rideshare and Amazon card debiting ($200–$250 liquid buffer before Thursday Sept 24).
   - Established Amazon Prime Urgent Supplies Checklist: Tracking 6 key items before Prime shipping cutoff (silicone interfaces, optical microfiber cloths for lenses only, anti-scratch lens rings, 20ft HDMI, gaffer tape, AA batteries/lanyards).
   - Engineered interactive 10-item logistics checklist with `/api/transport` REST API persistence in `dev_dashboard/server.py`, LocalStorage sync, progress bar, and 1-click Markdown export.
   - Updated Days 10–12 operations schedule in Tab 9 (`render_festival_ops.py`), recompiled all Dev HUD and public static pages to `v0.1.65`, and verified JS syntax with Node `vm.Script`.

2. **Tribe XR Communication Channel Audit & Contact Routing Engine (v0.1.64):**
   - Audited verified outbound email channels for Tribe XR following delivery bounce on `partners@tribexr.com`.
   - Identified verified corporate and executive mailboxes from press releases and company disclosures: `info@tribexr.com`, `press@tribexr.com`, and `tom@tribexr.com` (alongside community Discord `discord.gg/tribexr` and LinkedIn `linkedin.com/in/timpallo/`).
   - Updated Tab 10 in `render_sidequest.py` and `dev_dashboard/index.html` with explicit bounce notice badge (`partners@ BOUNCED • USE info@, press@, or tom@`), corrected direct contact lines, and updated Option 2A email target.
   - Recompiled Dev HUD HTML, verified syntax with Node `vm.Script`, restarted server on Port 3040, and synchronized version across all manifests to `v0.1.64`.
2. **Volunteers & Floor Crew Hub, REST Roster Engine & Solo Curator Correspondence Polish (v0.1.63):**
   - Engineered modular `render_volunteers.py` generating Tab 12 (`🤝 XR Floor Crew & Volunteers`) in the Dev HUD (Port 3040).
   - Documented curator situation: Co-founder/partner Julia Jackson is immersed in her new works and might not be able to attend KremFest (open invitation warmly preserved); Lead Curator Larry James is recruiting 1–2 dedicated XR Floor Assistants ("Headset Guardians") to co-pilot the station across Friday Sept 25 and Saturday Sept 26 (approx 9:30 PM – 2:30 AM).
   - Codified 4 core floor duties: (1) Headset Onboarding & Strap Fitting, (2) Lens Armor & Facial Interface Sanitation (strict optical microfiber rule; no liquids on lenses), (3) Spectator TV Casting Watchdog (<3s refresh if disconnected), and (4) Queue Flow & Audience Choice Mobile Ballot QR guidance.
   - Formalized compensation & perks package: Full 2-night VIP/Artist festival wristbands ($75–$100 value), $75–$100 nightly cash/Venmo stipend, free venue drinks/hospitality, rotating shift downtime to enjoy music sets, and official festival spatial production credit.
   - Built 4 ready-to-dispatch templates with 1-click clipboard triggers: Direct Email / Personal Invitation, Seattle Indies & Game Dev Community Post (Discord/Slack), Social Media Broadcast (X.com, Instagram Stories, LinkedIn, Threads), and Quick SMS / DM Ping.
   - Engineered interactive live-roster table with `/api/volunteers` GET and POST REST endpoints in `dev_dashboard/server.py` persisting to `volunteers_roster.json` with LocalStorage fallback and 1-click Markdown export.
   - Polished correspondence templates across all tools (`render_sidequest.py`, `render_streamers.py`, `render_festival_ops.py`, and `build_social_hub.py`) signing Lead Curator Larry James solo, removing Julia Jackson from active correspondence while she is focused on her own projects.
   - Recompiled Dev HUD HTML (368 KB), verified JavaScript syntax with Node `vm.Script`, restarted server on Port 3040, and synchronized version across all manifests to `v0.1.63`.
2. **Algoriddim Dispatch Audit, Tribe XR Low-Pressure Realignment & 2027 Seed Engine (v0.1.62):**
   - Logged live Algoriddim outreach: Lead Curator Larry James dispatched partnership email to `pr@algoriddim.com` (noting `contact@algoriddim.com` bounced), sent direct outreach message via X.com, and BCC'd DJ Julia Camp (`dj.julia.camp@...`) to maintain seamless co-curation harmony.
   - Updated verified LinkedIn profile URL for Algoriddim CEO & Co-Founder Karim Morsy (`https://www.linkedin.com/in/karim-morsy-01356225/`) in Tab 10.
   - Realigned Tribe XR strategy and correspondence to strictly "underpromise and overdeliver": transitioned Station B from an overcommitted production suite to an informal, casual on-site demo where attendees and local DJs can try virtual CDJ-3000s in VR.
   - Rewrote Option 2A email: Low-pressure invitation asking if Tribe XR would like to have their app represented on-site for people to try (offering tracked store QR codes and requesting 1 app key), while warmly leaving the door open for an expanded showcase for KremFest 2027.
   - Updated Option 2B casual LinkedIn message to CEO Tom Impallomeni.
   - Added Option 2C: "Seed for 2027" exploratory note for zero-pressure introduction.
   - Recompiled Dev HUD HTML, verified JS syntax with Node `vm.Script`, and synchronized version across all manifests to `v0.1.62`.
2. **DJ VR Curated SideQuest, VR Streamers/Press Studio & Amazon Associates Focus Allocation (v0.1.61):**
   - Built modular `render_sidequest.py` rendering Tab 10 (`🎧 DJ VR SideQuest & Curated Outreach`) in the Dev HUD (Port 3040), establishing the Dual-Station DJ Blueprint for the Kremwerk dance floors (Station A: djay by Algoriddim MR crowd attraction vs. Station B: Tribe XR Pioneer CDJ-3000 producer sandbox).
   - Formulated Auto-Income & Marketing Dept synergy: custom UTM tracking (`utm_source=kremfest_xr&utm_medium=festival_showcase&utm_campaign=kremfest_2026_curated`) and physical on-site QR codes for Meta Horizon Store attribution.
   - Built ready-to-send outreach packages with 1-click clipboard triggers for Algoriddim (Karim Morsy) and Tribe XR (Tom Impallomeni) across Email, LinkedIn, and Social DMs.
   - Built modular `render_streamers.py` rendering Tab 11 (`🎥 VR Streamers & Press Studio`) with curated directory of top XR YouTubers (SixTacos, SadlyItsBradley, Cas & Chary, GeekWire) and Creator VIP Pass protocol (2-night wristband, headset fast-track, clean HDMI/audio tap, pre-doors private demo, mandatory venue pre-approval rule).
   - Allocated Sunday, September 20 (Day 6) as dedicated Amazon Associates Activation Day (`wulfdesign-20`) in operations roadmap and Tab 9.
   - Recompiled Dev HUD HTML, verified JS syntax with Node `vm.Script`, and synchronized version across all manifests to `v0.1.61`.
2. **Operations Logistics Upgrades, Compensation Memo & Seattle Event Calendar Guide (v0.1.60):**
   - Expanded Master Operations Grimoire (`private/operations/festival_countdown_and_hardware_checklist.md`) and Dev HUD Tab 9 (`🎒 Festival Ops & Countdown`) with Category F logistics (purple & red perimeter fairy lights from last year, backup Quest 2 headset retrieval, boat bench gear staging, wheeled luggage cart for load-in, printed hardcopy binder).
   - Authored comprehensive compensation memo (`private/operations/compensation_and_invoice_memo.md`) reconciling 2019/2025 financial history ($500–$600 honoraria) with 2026 expanded scope (7 titles, 2 nights 10 PM–4 AM, ~18 onsite hours, dual spectator screens, $75 supplies). Formulated Option A ($700 flat honorarium) and Option B ($500 baseline + passes) with ready-to-send correspondence for Nicole Stone & DJ Julia.
   - Created Seattle Event Listing Distribution Guide (`private/operations/seattle_event_listing_distribution_guide.md`) across 7 top platforms (The Stranger / EverOut, Do206, Resident Advisor, GeekWire, Seattle Times, CHS, Luma) with short, medium, and long copy blurbs.
   - Mapped out 4 strategic social media campaign posts (Posts 19–22) in Tab 6 for pre-deadline, post-deadline, and festival eve dispatches.
   - Air-gapped incomplete FilmFreeway submission Jon Stone / *Firedrake VR* (`KW2319`) into `staging_vault.json` with dedicated outreach options in Tab 7.
   - Recompiled Dev HUD HTML and validated JS syntax with Node `vm.Script`. Synchronized version across all manifests to `v0.1.60`.
2. **Master Festival Operations Studio, Hardware Checklist & Real-Time Countdown (v0.1.59):**
   - Codified comprehensive 13-day day-by-day countdown roadmap (Sept 15–27, 2026 leading up to KremFest XR at Kremwerk Complex on Sept 25–26; doors 10:00 PM PDT; submissions close Sept 21 at 23:59 PDT).
   - Firmly isolated Saturday, September 19 as 100% blocked for Marina & Garden grounding (zero screen/tech time to protect nervous system vitality).
   - Documented 6 categorized equipment checklists (Headsets, Display/Computing, Power/Batteries, Sanitation/Lens Armor, Network/Hotspot, Floor Logistics/Safety) including the mandatory lens protection rule warded against the 2019 Oculus Go lens damage incident (silicone lens rings + optical microfiber only; alcohol wipes ONLY for silicone and plastic).
   - Codified the 3-Tier Spectator Pipeline: Quest 3 standalone primary + Laptop HDMI Out to venue TV as persistent anchor + iPad Air on tabletop stand as mobile queue spectator screen.
   - Documented the GeekFest West 2025 panel hot-swap protocol: persistent HDMI anchor prevents TV "No Input" blue screens, browser/MQDH window `F11` fullscreen toggle, and `<3s` casting recovery via `Esc` ➔ `Ctrl + R`.
   - Built Tab 9 (`🎒 Festival Ops & Countdown`) in `build_social_hub.py` and `render_festival_ops.py` featuring live dual countdown clocks, real-time progress bar, tab badge sync (`0/59 Complete`), 1-click Markdown report export, and `/api/ops-checklist` persistent REST endpoint in `server.py`.
   - Synchronized version across all public and private manifests, tools, and servers to `v0.1.59`.
2. **VIP Developer Meta Horizon Store Attribution Templates (v0.1.58):**
   - Authored tailored post-confirmation and live verification correspondence for Grant Hinkson (Parietal Lab: *CONNECTOME*, *CONSTELLATIONS*, *Project Hydra*) and Patrick Ascolese (Dark Arts Software: *Trip the Light: Let's Dance*).
   - Clarified inbound traffic analytics: all outbound store links pass `utm_source=kremfest_xr&utm_medium=festival_showcase&utm_campaign=kremfest_2026_vip`, rendering directly in guest developers' Meta Horizon Developer Consoles (under Analytics ➔ Acquisition & Referrers) and website telemetry.
   - Upgraded Tab 6 ("🎟️ SLICE & PAX VIP Invites") in `build_social_hub.py` and `dev_dashboard/index.html` with Option 3 subcards featuring 1-click clipboard triggers (`text-grant-attribution-email` and `text-patrick-attribution-email`).
   - Synchronized version across all public and private manifests, tools, and servers to `v0.1.58`.
2. **Grant Hinkson VIP App Keys Received & 3-Experience Suite Integrated (v0.1.57):**
   - Grant Hinkson (Parietal Lab / *Fr0gg3r*) enthusiastically responded to Larry's festival invitation and emailed Quest App Keys for *CONNECTOME* and *CONSTELLATIONS: Touch the Stars*.
   - Officially offered and included a 3rd spatial experience: *Project Hydra: Iterations*, the virtual reality gallery companion to the monumental installation showcased at the Seattle Coliseum of Art (free on the Meta Horizon Store: canonical permalink `https://www.meta.com/experiences/project-hydra-iterations/26371440209190143/`, shortlink `https://vr.meta.me/s/21wPTxyxcIjwIBn`).
   - Scraped master 2048×1152 promotional webp from Grant's server, resized and converted to high-res 1440×810 JPEG (`assets/images/2026/project_hydra_2026.jpg`, 137 KB) matching festival standard 16:9 aesthetic.
   - Documented pure optical hand-tracking interaction scheme across all 3 experiences ("optimized for hands from the beginning"). Larry reassured Grant that pure hand-tracking is ideal for festival showcase floor, with onboarding testing scheduled for next week.
   - Merged all 3 Grant Hinkson experiences into `years.2026.selections` in `lineups.json` with rich metadata, director statements, and verified links.
   - Recompiled all static HTML portals via `publish_to_public.py`. The 2026 lineup now features 5 official juried selections alongside the 2 UpLiftVR headliners.
   - All 7 experiences dynamically populate on the live 2026 Audience Choice Ballot (`2026/vote/index.html`).
   - Updated Tab 6 ("🎟️ SLICE & PAX VIP Invites") in `build_social_hub.py` and `dev_dashboard/index.html` with confirmed selection badges, an app keys received banner, direct links for all 3 apps, and YouTube trailer links.
   - Synchronized version across all public and private manifests, tools, and servers to `v0.1.57`.
2. **Dev HUD Script Syntax Repair & Batch Resilience (v0.1.56):**
   - Diagnosed root cause of unresponsive Dev HUD navigation buttons (`📥 Ingest`, `🧪 Staging Vault`, `🎴 Lineup Editor`, etc.): multiline Python strings had generated unescaped physical newlines inside JavaScript string literals (`missingItems.join("\n")`), triggering a fatal browser `SyntaxError: Invalid or unexpected token` that halted script execution.
   - Escaped all JavaScript string newlines (`join('\\n')`) and verified full script syntax with Node.js `vm.Script` (100% clean).
   - Upgraded Windows batch scripts (`serve.bat` and `start_dev.bat`) with operator escaping (`^&`) and single-source browser launching via Python server script.
   - Enhanced Winsock 10048 port reuse logging in `server.py` to clarify active background status.
2. **Air-Gapped Incomplete Staging Vault & Candidate Outreach Engine (v0.1.55):**
   - Engineered dedicated, physically isolated candidate vault (`staging_vault.json`) that is strictly excluded from public static compilation (`publish_to_public.py`).
   - Built interactive 6-point deliverable readiness checklist (Quest App Key, 16:9 Key Art, Synopsis, Creator Bio, Runtime/Comfort, Waiver), real-time readiness scoring (0–100%), and dynamic missing materials correspondence generators with 1-click clipboard triggers (`Full Request` and `Quick Ping`).
   - Upgraded Tab 1 ingestion with default destination routing into the Staging Vault.
   - Added REST endpoints (`/api/staging`, `/api/staging/add`, `/api/staging/delete`, `/api/staging/promote`) in `server.py` allowing 1-click atomic graduation to `lineups.json` when complete.
   - Pushed public portal to GitHub `main` (`5792707..62f2347`).
2. **Grant Hinkson Follow-Up Copy Upgraded (v0.1.54):**
   - Upgraded both Option 2A (Full) and Option 2B (Quick Ping) in Dev HUD Tab 6 (`dev_dashboard/index.html` & `build_social_hub.py`).
   - The messages explicitly highlight that dedicated spotlight cards are staged for **both** *CONNECTOME* and *CONSTELLATIONS: Touch the Stars* with his studio links and official key art.
   - Includes direct inspection links (`https://wulfdesign.github.io/kremfest-xr/2026/` and main portal `https://wulfdesign.github.io/kremfest-xr/`).
   - Explicitly asks for Quest App Keys (or release channel invites) for **both** experiences for pre-festival headset testing.
3. **Dual-App Split for CONNECTOME & CONSTELLATIONS: Touch the Stars (v0.1.53):**
   - User clarified that *CONSTELLATIONS: Touch the Stars* is a separate, dedicated app on the Meta Quest Store (`https://www.meta.com/experiences/constellations-touch-the-stars/24145606965110616/`).
   - Split Grant Hinkson / Parietal Lab showcase into two dedicated cards on `index.html` and `2026/index.html`:
     - Card 1: *CONNECTOME* (`2026-vip-connectome`) with Meta Quest Store link (`connectome/25707920632186813/`), official game site (`connectomegame.com`), studio, portfolio, and LinkedIn.
     - Card 2: *CONSTELLATIONS: Touch the Stars* (`2026-vip-constellations`) with direct Meta Quest Store link (`constellations-touch-the-stars/24145606965110616/`), overview, studio, and portfolio.
   - Scraped master 2560×1440 CDN key art for *CONSTELLATIONS* directly from the Meta Quest Store, resized and optimized to `assets/images/2026/constellations_2026.jpg` (1440×810, 89.6 KB).
   - Upgraded Dev HUD Tab 6 ("🎟️ SLICE & PAX VIP Invites") with direct quick-launch buttons for `Meta: CONNECTOME ↗` and `Meta: CONSTELLATIONS ↗`.
4. **Trip the Light Presentation Polish (v0.1.52):**
   - Cleaned up VIP Industry Showcase card: removed `(APP KEY RECEIVED)` and operational staging text.
   - Set status badge to `✅ CONFIRMED OFFICIAL SELECTION` and status bullet to `Confirmed Official Selection`.
   - Embedded scraped high-res key art (`assets/images/2026/trip_the_light_2026.jpg`) directly into the VIP card for visual symmetry.
5. **Grant Hinkson / Parietal Lab Clean Spotlight (v0.1.52):**
   - Removed internal operational notes `(Awaiting Confirmation & App Key Setup)` and `(Awaiting App Key & Floor Verification)` from byline and bullets.
   - Set badge to `🎟️ INVITED VIP SPOTLIGHT` and status to `VIP Invitation Dispatched`. Clean byline: `By Grant Hinkson • Parietal Lab`.
6. **Scraped Meta Quest Store Key Art for CONNECTOME:**
   - Scraped official 2560x1440 CDN master key art from the live Meta Quest Store page (`connectome/25707920632186813/`), resized and optimized to `assets/images/2026/connectome_2026.jpg` (1440x810, 114 KB).
   - Embedded `connectome_2026.jpg` into Grant's VIP showcase card across `index.html` and `2026/index.html`.
7. **Discovered & Wired Verified Studio & Store Links:**
   - Meta Quest Store: `https://www.meta.com/experiences/connectome/25707920632186813/`
   - Official Game Site: `https://www.connectomegame.com/`
   - Studio Site: `https://parietallab.com/`
   - Grant Hinkson Portfolio: `https://granthinkson.com/`
   - Studio LinkedIn: `https://www.linkedin.com/company/parietal-lab/`
   - Added 1-click action buttons in Tab 6 of the Dev HUD (`build_social_hub.py`).
8. **Trip the Light: Let's Dance Merged into Lineup (v0.1.51):**
   - Official 2026 selection in `data/lineups.json` with rich metadata, rendered dynamically into `index.html`, `2026/index.html`, and live 2026 Audience Choice Ballot (`2026/vote/index.html`).

---

## ⚓ Key File Anchors & Navigation

* **Master Public Readme:** [`README.md`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/README.md)
* **Master Public Tasks:** [`tasks.md`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/tasks.md)
* **Master Public Devlog:** [`devlog.md`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/devlog.md)
* **Private Dev HUD Server:** [`private/dev_dashboard/server.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/dev_dashboard/server.py) (`http://localhost:3040/`)
* **Static Site Compiler:** [`private/submission_pipeline/tools/publish_to_public.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/tools/publish_to_public.py)
* **Master Lineups Database:** [`private/submission_pipeline/data/lineups.json`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/data/lineups.json)
* **Dev HUD Builder:** [`private/submission_pipeline/tools/build_social_hub.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/tools/build_social_hub.py)
* **Trip the Light Key Art:** [`assets/images/2026/trip_the_light_2026.jpg`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/assets/images/2026/trip_the_light_2026.jpg)
* **VRMakerDome B2B Corporate Agency:** [`projects/vrmakerdome/README.md`](file:///C:/Agents/a0-symbiot-ai/projects/vrmakerdome/README.md) (`http://localhost:3016/`)

---

## 🎯 Top Priority Directives for Next Session

1. **Empirical Local QA Sign-off:** Magus Wulf verifies `http://localhost:3040/` (Dev HUD Tabs 1-8, especially Tab 2 Staging Vault & Tab 6 VIP Invites) and `http://localhost:3039/2026/index.html` + `http://localhost:3039/2026/vote/index.html` (all 7 experiences & ballot).
2. **Quest App Key Redemption & Headset Sideload Testing:** Redeem Quest App Keys on Meta Quest 3 for Patrick's *Trip the Light* and Grant's *CONNECTOME*, *CONSTELLATIONS: Touch the Stars*, and *Project Hydra: Iterations*. Conduct floor calibration and verify optical hand-tracking responsiveness.
3. **🔥🔥🔥 Amazon Associates Account Setup:** Finalize tax/payment onboarding for tag `wulfdesign-20`, re-enable Amazon button in `publish_to_public.py`, and recompile public pages.
4. **Dispatch 10-Day Countdown Blasts:** Copy and post the 3 ready posts (LinkedIn, Facebook/Instagram, Reddit/Discord) for the Sept 21 deadline.
