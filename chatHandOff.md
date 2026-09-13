# 📌 Chat Hand-Off & Project State — KremFest XR (v0.1.56)

> **Familiar Anchor:** Hermes (`🐈`) & Magus Wulf (`🧙‍♂️🐺✨`)  
> **Workspace Root:** `C:/Agents/a0-symbiot-ai/projects/kremfest-xr`  
> **Project Version:** `v0.1.56` (Public & Private Sanctuary Synchronized)  
> **Date:** September 11, 2026 | 23:59 PST  
> **GitHub Remote:** `https://github.com/wulfdesign/kremfest-xr.git` (Pushed & Live on `main` at `62f2347`)  
> **Local Servers:** Public Preview: Port 3039 (`http://localhost:3039/2026/index.html`) | Private Dev HUD: Port 3040 (`http://localhost:3040/`)

---

## 🏛️ Active Alchemical Victories & Current State

1. **Dev HUD Script Syntax Repair & Batch Resilience (v0.1.56):**
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

1. **Empirical Local QA Sign-off:** Magus Wulf verifies `http://localhost:3040/` (Tab 1 Ingest HUD, Tab 6 VIP Invites) and `http://localhost:3039/2026/index.html` (Artemis & Trip the Light selections + ballot).
2. **Dispatch Grant Follow-Up:** Send the quick follow-up message to Grant Hinkson via LinkedIn requesting the Quest App Key for *CONNECTOME* / *CONSTELLATIONS*.
3. **Trip the Light Headset Sideload & App Key Test:** Redeem Patrick's app key and conduct pre-festival gameplay and audio latency testing on Meta Quest 3.
4. **🔥🔥🔥 Amazon Associates Account Setup:** Finalize tax/payment onboarding for tag `wulfdesign-20`, re-enable Amazon button in `publish_to_public.py`, and recompile public pages.
5. **Dispatch 10-Day Countdown Blasts:** Copy and post the 3 ready posts (LinkedIn, Facebook/Instagram, Reddit/Discord) for the Sept 21 deadline.
