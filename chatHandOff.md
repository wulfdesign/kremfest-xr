# 📌 Chat Hand-Off & Project State — KremFest XR (v0.1.52)

> **Familiar Anchor:** Hermes (`🐈`) & Magus Wulf (`🧙‍♂️🐺✨`)  
> **Workspace Root:** `C:/Agents/a0-symbiot-ai/projects/kremfest-xr`  
> **Project Version:** `v0.1.52` (Public & Private Sanctuary Synchronized)  
> **Date:** September 11, 2026 | 22:30 PST  
> **Local Servers:** Public Preview: Port 3039 (`http://localhost:3039/2026/index.html`) | Private Dev HUD: Port 3040 (`http://localhost:3040/`)

---

## 🏛️ Active Alchemical Victories & Current State

1. **Trip the Light Presentation Polish (v0.1.52):**
   - Cleaned up VIP Industry Showcase card: removed `(APP KEY RECEIVED)` and operational staging text.
   - Set status badge to `✅ CONFIRMED OFFICIAL SELECTION` and status bullet to `Confirmed Official Selection`.
   - Embedded scraped high-res key art (`assets/images/2026/trip_the_light_2026.jpg`) directly into the VIP card for visual symmetry.
2. **Grant Hinkson / Parietal Lab Clean Spotlight (v0.1.52):**
   - Removed internal operational notes `(Awaiting Confirmation & App Key Setup)` and `(Awaiting App Key & Floor Verification)` from byline and bullets.
   - Set badge to `🎟️ INVITED VIP SPOTLIGHT` and status to `VIP Invitation Dispatched`. Clean byline: `By Grant Hinkson • Parietal Lab`.
3. **Scraped Meta Quest Store Key Art for CONNECTOME & Parietal Lab:**
   - Scraped official 2560x1440 CDN master key art from the live Meta Quest Store page (`connectome/25707920632186813/`), resized and optimized to `assets/images/2026/connectome_2026.jpg` (1440x810, 114 KB).
   - Scraped high-res cover art from `parietallab.com` to `assets/images/2026/constellations_2026.jpg` (1440x810).
   - Embedded `connectome_2026.jpg` into Grant's VIP showcase card across `index.html` and `2026/index.html`.
4. **Discovered & Wired Verified Studio & Store Links:**
   - Meta Quest Store: `https://www.meta.com/experiences/connectome/25707920632186813/`
   - Official Game Site: `https://www.connectomegame.com/`
   - Studio Site: `https://parietallab.com/`
   - Grant Hinkson Portfolio: `https://granthinkson.com/`
   - Studio LinkedIn: `https://www.linkedin.com/company/parietal-lab/`
   - Added 1-click action buttons in Tab 6 of the Dev HUD (`build_social_hub.py`).
5. **Grant Hinkson Follow-Up Copy Prepared:**
   - Ready-to-dispatch follow-up copy requesting Quest App Key to test on floor headsets, noting that his live card and links are already staged on the festival showcase site for him to inspect.
6. **Trip the Light: Let's Dance Merged into Lineup (v0.1.51):**
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

1. **Empirical Local QA Sign-off:** Magus Wulf verifies `http://localhost:3040/` (Tab 1 Ingest HUD, Tab 6 VIP Invites) and `http://localhost:3039/2026/index.html` (Artemis & Trip the Light selections + ballot).
2. **Dispatch Grant Follow-Up:** Send the quick follow-up message to Grant Hinkson via LinkedIn requesting the Quest App Key for *CONNECTOME* / *CONSTELLATIONS*.
3. **Trip the Light Headset Sideload & App Key Test:** Redeem Patrick's app key and conduct pre-festival gameplay and audio latency testing on Meta Quest 3.
4. **🔥🔥🔥 Amazon Associates Account Setup:** Finalize tax/payment onboarding for tag `wulfdesign-20`, re-enable Amazon button in `publish_to_public.py`, and recompile public pages.
5. **Dispatch 10-Day Countdown Blasts:** Copy and post the 3 ready posts (LinkedIn, Facebook/Instagram, Reddit/Discord) for the Sept 21 deadline.
