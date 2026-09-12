# 📌 Chat Hand-Off & Project State — KremFest XR (v0.1.51)

> **Familiar Anchor:** Hermes (`🐈`) & Magus Wulf (`🧙‍♂️🐺✨`)  
> **Workspace Root:** `C:/Agents/a0-symbiot-ai/projects/kremfest-xr`  
> **Project Version:** `v0.1.51` (Public & Private Sanctuary Synchronized)  
> **Date:** September 11, 2026 | 22:20 PST  
> **Local Servers:** Public Preview: Port 3039 (`http://localhost:3039/2026/index.html`) | Private Dev HUD: Port 3040 (`http://localhost:3040/`)

---

## 🏛️ Active Alchemical Victories & Current State

1. **Trip the Light: Let's Dance Merged into Lineup:**
   - Appended *Trip the Light: Let's Dance* (Patrick Ascolese / Dark Arts Software) as an official 2026 selection into `data/lineups.json`.
   - Populated complete rich metadata: variable runtime, room-scale Quest format, full synopsis, statements, quotes, and links.
   - Dynamically compiled selection into `index.html`, `2026/index.html` (under `2026 Official Juried Selections`), and the live 2026 Audience Choice Ballot (`2026/vote/index.html`).
2. **Meta Quest Store High-Res Key Art Scraped & Optimized:**
   - Scraped and extracted official 1440x810 promotional key art from the live Meta Quest Store CDN (`trip-the-light-lets-dance/8025476794223581/`).
   - Saved optimized JPEG (`assets/images/2026/trip_the_light_2026.jpg`, 143 KB) featuring the signature neon pink title and dancing performers.
3. **VIP Spotlight Statuses Calibrated (Confirmed vs. Pending):**
   - Updated Patrick Ascolese's spotlight card in `publish_to_public.py` with `✅ CONFIRMED SELECTION (APP KEY RECEIVED)`.
   - Updated Grant Hinkson's spotlight card with `⏳ INVITED SPOTLIGHT — PENDING CONFIRMATION` and explicit note on awaiting confirmation and app key setup.
4. **Grant Hinkson Follow-Up Message & App Key Request Studio:**
   - Drafted a friendly, low-pressure follow-up message requesting an app key / release channel invite for *CONNECTOME* or *CONSTELLATIONS* so Larry can pre-install and test it on the festival headsets ahead of time.
   - Baked the follow-up copy into Tab 6 of the Dev HUD with 1-click clipboard copy (`text-invite-grant-followup`).
5. **FilmFreeway Ingestion Pipeline & Dev HUD Upgrades:**
   - Full 5-step visual operator workflow card on Tab 1 of the Dev HUD (`http://localhost:3040/`).
   - Clean, non-duplicating parser handles raw FilmFreeway web page copy-pastes safely.
6. **Ecology Cross-Pollination (VRMakerDome / Port 3016):**
   - Connected VRMakerDome's sovereign B2B corporate event agency context with KremFest XR curation lineage across topology and documentation.

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

1. **Empirical Local QA Sign-off:** Magus Wulf verifies `http://localhost:3040/` (Tab 1 Ingest HUD, Tab 6 VIP Invites) and `http://localhost:3039/2026/index.html` (Artemis & Trip the Light selections + ballot).
2. **Dispatch Grant Follow-Up:** Send the quick follow-up message to Grant Hinkson via LinkedIn requesting the Quest App Key for *CONNECTOME* / *CONSTELLATIONS*.
3. **Trip the Light Headset Sideload & App Key Test:** Redeem Patrick's app key and conduct pre-festival gameplay and audio latency testing on Meta Quest 3.
4. **🔥🔥🔥 Amazon Associates Account Setup:** Finalize tax/payment onboarding for tag `wulfdesign-20`, re-enable Amazon button in `publish_to_public.py`, and recompile public pages.
5. **Dispatch 10-Day Countdown Blasts:** Copy and post the 3 ready posts (LinkedIn, Facebook/Instagram, Reddit/Discord) for the Sept 21 deadline.
