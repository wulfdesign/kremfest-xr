# 📌 Chat Hand-Off & Project State — KremFest XR (v0.1.50)

> **Familiar Anchor:** Hermes (`🐈`) & Magus Wulf (`🧙‍♂️🐺✨`)  
> **Workspace Root:** `C:/Agents/a0-symbiot-ai/projects/kremfest-xr`  
> **Project Version:** `v0.1.50` (Public & Private Sanctuary Synchronized)  
> **Date:** September 11, 2026 | 22:00 PST  
> **Local Servers:** Public Preview: Port 3039 (`http://localhost:3039/2026/index.html`) | Private Dev HUD: Port 3040 (`http://localhost:3040/`)

---

## 🏛️ Active Alchemical Victories & Current State

1. **FilmFreeway Ingestion Pipeline Fixed & Re-Engineered:**
   - Diagnosed and eliminated the splitting bug in `ingest_filmfreeway_text.py`: legacy regex `\bProject:\s*` collided with `Student Project:No` in the specifications block of raw web page copy-pastes, fragmenting a single project into two broken entries.
   - Built robust, intelligent web page and spreadsheet parsing with multiline anchors, automatic UI marker stripping, and intelligent deduplication via `merge_or_append_selection()`.
2. **Artemis: The Free Return Clean Ingestion & Key Art Optimized:**
   - Ingested *Artemis: The Free Return (WebXR Orbital Sandbox)* (KW2321) into `data/lineups.json` with 100% complete metadata: title, directors, runtime, format, genre, logline, multi-paragraph synopsis, director bio, director statement, quote, author attribution, and rich links (WebXR, FilmFreeway, GitHub, Facebook, X, Instagram, Bluesky).
   - Extracted high-res artwork from `lunar-flyby-xr` to `assets/images/2026/artemis_lunar_flyby_2026.jpg` (optimized 340 KB).
3. **Public Static Site Compiler Upgrade (`publish_to_public.py`):**
   - Implemented dynamic rendering of `2026.selections` into both `index.html` (Master Landing Portal) and `2026/index.html` (5th Edition Active Showcase) under `2026 Official Juried Selections`.
   - Wired dynamic radio choices into the 2026 Audience Choice Ballot (`2026/vote/index.html`) so any confirmed selections automatically populate alongside headliners.
4. **Dev HUD (Port 3040) Operator Instructions & Staged Card Actions (`build_social_hub.py`):**
   - Added a 5-step visual operator workflow card at the top of Tab 1 (`#tab-ingest`): Step 1 Copy Submission, Step 2 Configure Target, Step 3 Parse & Ingest, Step 4 Inspect & Artwork, Step 5 Recompile Site.
   - Enhanced staged card previews with tracking numbers, country/origin, runtime, format, and instant "⚡ Recompile Now" button.
5. **VIP Creator Preparedness (Patrick Ascolese / Dark Arts Software):**
   - Patrick Ascolese submitted on FilmFreeway with minimal info due to launch busyness.
   - Prepared rich metadata pack (*Trip the Light: Let's Dance*, Dark Arts Software, Meta Quest Store, and trailer links) ready for instant enrichment via Tab 1 or `lineups.json`.
6. **Ecology Cross-Pollination (VRMakerDome / Port 3016):**
   - Connected VRMakerDome's sovereign B2B corporate event agency context with KremFest XR curation lineage across topology and documentation.

---

## ⚓ Key File Anchors & Navigation

* **Master Public Readme:** [`README.md`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/README.md)
* **Master Public Tasks:** [`tasks.md`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/tasks.md)
* **Master Public Devlog:** [`devlog.md`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/devlog.md)
* **Private Dev HUD Server:** [`private/dev_dashboard/server.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/dev_dashboard/server.py) (`http://localhost:3040/`)
* **Static Site Compiler:** [`private/submission_pipeline/tools/publish_to_public.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/tools/publish_to_public.py)
* **Ingestion Tool:** [`private/submission_pipeline/tools/ingest_filmfreeway_text.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/tools/ingest_filmfreeway_text.py)
* **Master Lineups Database:** [`private/submission_pipeline/data/lineups.json`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/data/lineups.json)
* **Dev HUD Builder:** [`private/submission_pipeline/tools/build_social_hub.py`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/submission_pipeline/tools/build_social_hub.py)
* **VRMakerDome B2B Corporate Agency:** [`projects/vrmakerdome/README.md`](file:///C:/Agents/a0-symbiot-ai/projects/vrmakerdome/README.md) (`http://localhost:3016/`)

---

## 🎯 Top Priority Directives for Next Session

1. **Empirical Local QA Sign-off:** Magus Wulf verifies `http://localhost:3040/` (Tab 1 Ingest HUD) and `http://localhost:3039/2026/index.html` (Artemis selection rendering & ballot).
2. **Enrich Patrick Ascolese's Submission:** Ingest Patrick's raw FilmFreeway submission text into Tab 1 or apply the prepared Dark Arts Software metadata pack.
3. **🔥🔥🔥 Amazon Associates Account Setup:** Finalize tax/payment onboarding for tag `wulfdesign-20`, re-enable Amazon button in `publish_to_public.py`, and recompile public pages.
4. **Dispatch 10-Day Countdown Blasts:** Copy and post the 3 ready posts (LinkedIn, Facebook/Instagram, Reddit/Discord) for the Sept 21 deadline.
5. **VRMakerDome Rate Card Integration:** Present Tier 3 rate card for 2026 festival VR curation.
