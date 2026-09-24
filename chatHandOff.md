# 📌 Chat Hand-Off & Project State — KremFest XR (v0.2.11)

> **Familiar Anchor:** Hermes (`🐈`), DaVinci (`🎨`), Pixel (`✨`) & Magus Wulf (`🧙‍♂️🐺✨`)  
> **Workspace Root:** `C:/Agents/a0-symbiot-ai/projects/kremfest-xr`  
> **Project Version:** `v0.2.11` (Public & Private Sanctuary Synchronized)  
> **Date:** September 23, 2026 | 22:10 PDT  
> **GitHub Remote:** `https://github.com/wulfdesign/kremfest-xr.git` (Public pushed at commit `0a43034` [v0.2.4]; local commits staged locally pending operator review)  
> **Local Servers:** Public Preview: Port 3039 (`http://localhost:3039/index.html`) | Private Dev HUD: Port 3040 (`http://localhost:3040/`) | Dev 3039 Mirror: `http://localhost:3040/dev/` | Dev 2026: `http://localhost:3040/dev/2026/` | Dev 2018: `http://localhost:3040/dev/2018/` | Social Card Studio: `http://localhost:3040/preview/social-card` | Floor Loop & Sizzle Reel: `http://localhost:3040/preview/splash_cards.html`

---

## 🏛️ Active Alchemical Victories & Current State

0. **Sizzle Reel Portal Sans Default Font, Firedrake 2x High-Res Master & Headset QA Ingestion (v0.2.11 - Sept 23, 2026):**
   - **Default Heading Font Shift to `Portal Sans`:** Switched default title font across CSS and dynamic JS to the clean modern native system stack **`Portal Sans`** (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif`), directly matching the KremFest XR landing portal. Handled graceful `localStorage` migration so `Portal Sans` activates automatically on first load.
   - **Firedrake Key Art 2x High-Res Master Upscaling:** Replaced the low-res 800×431 raster with a pristine 1600×862 2x master (`firedrake_wizards_warren_2026.jpg`) using PIL Lanczos resampling and gentle unsharp masking. Firedrake now fills the full vertical media height, expanding from 800×431 up to **878px × 473px** (on 1440×900) and **960px × 517px** (on 1080p, and up to 1400px in fullscreen, +44% to +205% surface area).
   - **In-Headset Testing Ingestion & Operations Action Item:** Ingested Magus Wulf's hands-on headset testing notes across all 10 selections. Identified UX friction points for *CONSTELLATIONS: Touch the Stars* (Grant Hinkson / Parietal Lab): unresponsive level reset/tutorial reset buttons, difficulty triggering menu behind thumb/wrist gesture, and drawing stage prerequisite requiring precise reticle centering. Initialized operational task to source a 30-45s video tutorial demo clip and engineer a laminated floor quick-start guide card with visual 3-phase hand gesture diagrams for festival floor attendants.
   - **Task Ledger Archival to `COMPLETED.md`:** Following Magus Wulf's QA verification pass (*"I love it !!! it looks GREAT! ... everything else looks FANTASTIC!"*), officially moved tasks `v0.2.5` through `v0.2.10` to `COMPLETED.md` with chalice `🏆`.

0. **Sizzle Reel Duration Controls Compaction & Ballot QR Double Border Purge (v0.2.10 - Sept 23, 2026):**
   - **Duration Presets Compaction (`6s`, `10s`, `15s`, `20s`):** Replaced the 5-button sequence with 4 clean, tightly spaced presets: **`6s`**, **`10s`**, **`15s`**, **`20s`** labeled `DUR:`. Reduced button gaps to 2px and padding to 2px 6px, bringing all presets close together and reducing toolbar width by ~120px.
   - **Single-Row Controls Bar Hardening:** Compacted spacing across all toolbar controls (`.select-card`, `.btn-nav`, `.ticker-pill`, `#fontSelect`, `.btn-fullscreen`). Hardened `.controls-bar`, `.controls-left`, and `.controls-right` with `flex-wrap: nowrap; white-space: nowrap; overflow-x: auto;` and `flex-shrink: 0;` on `.btn-fullscreen`. Empirically verified across 1920×1080, 1440×900, and 1280×800 that the toolbar measures strictly 45px tall (1 single row) with `📺 FULLSCREEN TV DISPLAY (F11)` anchored on the top line (`y: 7`).
   - **Ballot QR Double Border Eradication (Slide 1):** Diagnosed root cause: `kremfest_2026_vote_color.svg` line 15 had an explicit glowing cyberpunk border `<rect stroke="url(#neonSquareGrad)" ... />` that nested inside `.qr-stage-box`'s outer glowing cyan border, creating an unsightly double border. Added `"vote_ballot"` to `QR_MANIFEST` in `generate_lineup_qrs.py` and regenerated high-contrast styled QR codes (`qr_vote_ballot_neon.png` and `qr_vote_ballot_print.png`) using `SquareModuleDrawer` and obsidian background. Removed the nested glowing stroke from `kremfest_2026_vote_color.svg`. Updated Slide 1 (`lineup-glance`) in `render_splash_cards.py` to point to `assets/images/qr/qr_vote_ballot_neon.png`, leaving exactly one clean glowing cyan container border matching all other 11 slides.
   - **Empirical Verification:** Headless Chrome tests verified bar height is strictly 45px across viewports. Captured element screenshot (`private/debug/verified_slide1_ballot_qr.png`) and full-page screenshot (`private/debug/verified_splash_cards_slide1.png`) empirically confirming zero double borders and seamless 1-row layout.

0. **Sizzle Reel Fluid Auto-Resizing, Outfit Default Font & Single-Row Controls Bar (v0.2.9 - Sept 23, 2026):**
   - **Fluid Left-Hand Image Auto-Resizing (Dead Space Eradication):** Eliminated all rigid pixel height constraints (`485px`, `420px`, `460px`, `590px`) from `.hero-thumb-box` and `.hero-thumb-img`. Converted `.col-left-media` and `.hero-thumb-box` to true responsive flex containers (`flex: 1 1 0; min-height: 0; min-width: 0; width: 100%; height: 100%; padding: 6px 10px; box-sizing: border-box;`). `.hero-thumb-img` uses `max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain;`, automatically maximizing image display across any screen resolution with gentle breathing padding.
   - **Empirical Fullscreen Scale Explosion (+286% Surface Area on 1440p):** On operator's 2560×1440 display (referenced in `private/debug/Screenshot 2026-09-23 204200.png`), the Lineup One-Sheet artwork expanded from `590px × 770px` to **`983px × 1446px`** (+66% taller, +88% wider, nearly 4× larger surface area), rendering every project card, laurel, and date effortlessly legible from across the room.
   - **Default Heading Font Shift to `Outfit` & Portal Sans Option:** Switched default title font across CSS and dynamic JS to clean geometric sans **`Outfit`**. Removed `Orbitron (Cyber)` from options and replaced with **`Portal Sans (Landing Page)`** (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif`) to match the primary festival landing portal. Handled local storage migration (`kremfest_sizzle_font`) so existing stored `'Orbitron'` values gracefully resolve to `'Outfit'`.
   - **Single-Row Controls Bar Pinning:** Applied `flex-wrap: nowrap; overflow-x: auto;` on `.controls-bar` and `flex-shrink: 0;` on `.controls-right`, guaranteeing that `📺 FULLSCREEN TV DISPLAY (F11)` stays strictly pinned to the single top line across all viewports (empirically tested across 1920×1080, 1440×900, and 1280×800 at bar height 51px, `y: 9`).
   - **Debug Directory Gitignore Guard:** Added `debug/` to `private/.gitignore` to prevent operator screenshot dumps from being tracked in git.

0. **Sizzle Reel Single-Line Typography, Orbitron Font Upgrade & Lineup One-Sheet Stage Expansion (v0.2.8 - Sept 23, 2026):**
   - **Harvested Operator Out-of-Band `/btw` Note [15]:** Successfully recovered directive from `get_btw.py`: *"2026 Showcase Lineup at a Glance should be on one line on the splash cards... and i don't like the fonts for that... that img in particul needs to be bigger"*.
   - **Strict Single-Line Title Presentation:** Calibrated `.card-title` with `white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: clamp(1.4rem, 2.0vw, 2.2rem);` ensuring "2026 Showcase Lineup at a Glance", "UpLiftVR 'Maiden Flight' Balloon Ride", and all 12 slide titles render strictly on **EXACTLY ONE LINE** across desktop/TV displays with zero awkward line wraps.
   - **Elevated Heading Typeface (`Orbitron` Default):** Replaced wide `Syne` with **`Orbitron`** (futuristic cyberpunk/spatial computing display font, weight 800) as the primary title font, providing structured horizontal rhythm and clean right-angle aesthetic.
   - **Live Dynamic Font Switcher Toolbar:** Added 1-click `<select id="fontSelect">` dropdown in `.controls-bar` allowing instant switching between `Orbitron`, `Rajdhani`, `Outfit`, `Space Grotesk`, and `Syne` with `localStorage` persistence (`kremfest_sizzle_font`).
   - **Lineup One-Sheet Stage Expansion (`mode-glance`):** Implemented dedicated `.hero-thumb-box.mode-glance` stage for Slide 1 (`lineup-glance`), expanding container height to **485px** (max-height 500px; **580px** in Fullscreen). Lineup one-sheet now displays at **713px × 485px** (+31% surface area), making all 10 project cards, laurels, and dates legible directly from the floor display.
   - **Empirical Selenium/Chrome Verification:** Captured and audited headless Chrome element screenshots confirming title height is exactly 42px (1 line) and one-sheet dimensions are 713px × 485px with zero border and unclipped bottom anchor copy.

0. **Sizzle Reel Left-Hand Image Expansion & KremFest Poster Asset Calibration (Lossless De-Letterbox Crop) (v0.2.7 - Sept 23, 2026):**
   - **Lossless Poster De-Letterboxing:** Extracted and cropped out the 80px baked-in black letterbox padding bars from `assets/images/2026/kremfest_2026_poster.jpg` (retaining full 640×800 content with 4:5 aspect ratio), permanently eradicating all artificial border appearance.
   - **Portrait Poster Display Expansion (+40.3% Width / +97% Surface Area):** Scaled `.hero-thumb-box.mode-portrait` height to 460px (max-height 475px; 590px in fullscreen) with 100% contained fit. The KremFest 2026 poster now renders at 368px wide by 460px tall with zero borders and deep filmic drop shadow (`box-shadow: 0 20px 50px rgba(0, 0, 0, 0.95)`).
   - **Landscape Artwork Stage Height Expansion (+30% Visual Surface Area):** Scaled `.hero-thumb-box.mode-landscape` height from 375px to 420px (max-height 435px; 540px in fullscreen) with `max-height: 420px; box-shadow: 0 18px 45px rgba(0, 0, 0, 0.9)`, dramatically increasing visual presence across all 10 experience cards with zero cropping.
   - **Border Glow Perimeter Purge in Dynamic JavaScript:** Refined `updateCard()` to assign pure organic filmic drop shadows without colored perimeter halos (`${glowColor}25`) that could be mistaken for an outline.
   - **Headroom & Margins Optimization:** Calibrated `.card-16-9` padding to `24px 32px; gap: 26px;` and `.col-left-media` margin to `4px 0 8px 0`, guaranteeing all bottom copy, loglines, quotes, and footers remain cleanly anchored with zero descender clipping.
   - **Empirical Screenshot Verification:** Captured and audited headless Chrome card element screenshots of Slide 0, Slide 1, Slide 2, and Slide 10, confirming zero cropping, zero borders, and razor-sharp typography.
   - **System Versioning Synchronization:** Synchronized version to `v0.2.7` across Operator HUD, Tab 14, and devlogs.

0. **DaVinci & Pixel Visual Design Guild Overhaul — Typographic Identity, Zero-Border & Spatial Re-balancing (v0.2.6 - Sept 23, 2026):**
   - **Typographic Identity Upgrade (`Syne`):** Per operator directive and Design Guild verdict (`🎨 DaVinci` & `✨ Pixel`), upgraded slide titles to `Syne` (Weight 800) with `-0.02em` tracking and dual-tone text shadows, imbuing the presentation with authentic European underground electronic music festival energy. Imported `Syne`, `Unbounded`, and `Orbitron` alongside `Inter` and `Rajdhani` via Google Fonts.
   - **Total Border Purge Around Hero Artwork:** Completely eradicated all stroke borders from `.hero-thumb-box` and `.hero-thumb-img` across CSS and dynamic JS (`thumbBox.style.border = 'none'`). Replaced strokes with deep organic filmic drop shadows (`box-shadow: 0 16px 45px rgba(0, 0, 0, 0.85)`).
   - **Zero Top/Bottom Cropping on Landscape Art:** Converted media container to flexible `object-fit: contain` with `height: 375px; max-height: 395px; width: 100%`, preserving 100% of key art without cropping tops, bottoms, or laurels (*Maiden Flight*, *High Desert Eclipse*, *Lineup One-Sheet*, *Firedrake VR*).
   - **Enlarged Portrait Poster Sizing:** Scaled portrait posters (Slide 0: *KremFest 2026 Poster*, Slide 10: *We Are Dead Animals*) up to 410px–420px (+110% visual surface area), unbordered and centered against ambient blurred backdrops.
   - **16:9 Canvas Spatial Re-balancing (Slim QR Column):** Slimmed `.col-right` QR tower from 563px down to a razor-sharp 290px (`grid-template-columns: 1fr 290px`), expanding left media column width by +38% (from ~761px to ~1050px) while preserving large 210px QR codes with zero dead space.
   - **Bottom Copy Anchoring:** Restructured `.col-left` into header, media, and bottom zones, anchoring loglines, quotes, and metadata flush to the bottom edge.
   - **Version Bump to v0.2.6:** Synchronized Operator HUD header, Tab 14 sizzle studio, and devlogs to `v0.2.6`.

0. **Sizzle Reel `splash_cards.html` Layout & Border Overhaul & AI-UI Optimization (v0.2.5 - Sept 23, 2026):**
   - **Double Border & Extra Padding Elimination:** Eradicated redundant double borders and nested padding around hero artwork in `render_splash_cards.py` and `private/preview/splash_cards.html`. Stripped inner `<img>` borders and box padding.
   - **Edge-to-Edge Flush Landscape Mode Layout:** For landscape images (Slides 1–9, 11), configured `.hero-thumb-box.mode-landscape` to extend 100% flush from left to right edge of the card's media column.
   - **Height-Constrained Portrait Mode Exception:** Constrained portrait posters to 290px height with ambient blurred background.
   - **AI-UI Typography & Layout Hardening:** Restored `cardTitle` and `cardByline`, added line-height and padding to prevent descender clipping, and calibrated fullscreen CSS rules (`:fullscreen .card-16-9`).
   - **Empirical Verification:** Recompiled `splash_cards.html` and visually audited screenshots of Slides 0, 1, 2, 4, 5, 10, and 11 for pixel-perfect edge-to-edge alignment.

0. **Universal Centered Glance Box Alignment Across All Years & Public GitHub Push (v0.2.4 - Sept 23, 2026):**
   - **Public Remote Push:** Synchronized all verified commits through `v0.2.3` to GitHub `origin/main` following operator authorization.
   - **Universal Centered Glance Box Calibration:** Hardened `render_glance_box()` in `publish_to_public.py` with inline center-alignment styles applied across the container (`text-align: center; margin: 36px auto; max-width: 1050px`), title, flex list (`align-items: center`), and individual `<li>` items.
   - **Cache-Busted Stylesheet:** Linked all historical pages (2025, 2019, 2018, 2017) to cache-busted `style.css?v=0.2.4`.
   - **Desktop 1-Line Typography:** Refined `.glance-bullets li` with fluid responsive font sizing (`clamp(0.85rem, 1.15vw, 0.98rem)`) guaranteeing strict 1-line presentation per entry on desktop across all years.

0. **Universal Headliner Artwork & Public Dev Site Sync (v0.2.3 - Sept 23, 2026):**
   - Updated Maiden Flight and High Desert Eclipse headliner artwork across all pages.
   - Recompiled public site and synchronized with dev sandbox.

0. **Removal of Internal Status Text & Track Standardization (v0.2.2 - Sept 23, 2026):**
   - Stripped internal review notes (`Status: Curated Official Selection`) from all public-facing selection cards.
   - Standardized selection track badges (`✨ Curated Official Selection (Invited VIP Showcase)`, `🏆 Juried Official Selection`, `🌟 Guest Spotlight Selection`).

0. **Center-Aligned Multi-Year "Showcase at a Glance" & 2018 1-Line Selections Calibration (v0.1.98 - Sept 23, 2026):**
   - **Universal Center Alignment:** Transmuted `.glance-section`, `.glance-title`, and `.glance-bullets` in `assets/css/style.css` to a symmetrical, center-aligned layout without left-side bullet discs. Applies universally across all festival years on Port 3040 Dev Sandbox (`/dev/2026/`, `2025`, `2019`, `2018`, `2017`).
   - **2018 1-Line Formatting:** Defined `GLANCE_ENTRIES_2018` in `publish_to_public.py` to eliminate multi-line wrap on desktop/laptop displays. Trimmed redundant parenthetical production notes (*Symbion Project*, *Lionhearted*, *RocketMan 360*), preserving full credits in the detailed project cards below. All 7 entries for 2018 render on exactly ONE clean line.
   - **Cache Busting & Static Compilation:** Updated stylesheet query parameters to `style.css?v=0.1.98` and recompiled all 8 pages in `private/dev_site/` via `compile_dev.py`. Bumped Operator HUD badge to `v0.1.98`.

0. **2x Retina Social One-Sheet Rerender, Uncropped Poster Framing & 12-Slide Floor Loop Slideshow Engine (v0.1.97 - Sept 23, 2026):**
   - **2x Retina Resolution Lineup One-Sheet Rerender (2400 × 1840 px):** Re-rasterized `assets/images/2026/kremfest_xr_2026_lineup_one_sheet.png` and `private/preview/lineup_social_card_clean.png` at 2x Device Pixel Ratio (`--force-device-scale-factor=2`) using Chromium headless rendering at 1200×920 viewport. Yielded a crystal-clear 1.34 MB PNG with razor-sharp typography, crisp gold laurels, and high-fidelity poster thumbnails, eliminating all pixelation for social posts.
   - **Floor Loop & Sizzle Reel Slideshow Upgrades (`splash_cards.html` & `render_splash_cards.py`):**
     • *Uncropped Poster Framing (Zero Bottom Cutoff):* Replaced fixed `max-height: 240px` and `object-fit: cover` with an aspect-fit container (`.hero-thumb-box`, `360px` height) using `object-fit: contain` and an ambient blurred backdrop (`.hero-thumb-bg`). Vertical 2:3 posters (*We Are Dead Animals*, *Firedrake VR*, *KremFest 2026 Poster*) and wide banners are now 100% visible from top to bottom edge without any clipping.
     • *Slide 1 — Welcome & Festival Intro Slide:* Integrated official KremFest 2026 festival poster (`kremfest_2026_poster.jpg`), 5th edition welcome copy, dates (Sept 25–26, 2026), Kremwerk complex info, and Festival Guide & Map QR code (`qr_portal_main_neon.png`).
     • *Slide 2 — 2026 Lineup at a Glance Slide:* Displayed the high-resolution 2x Retina one-sheet artwork showcasing all 10 selections paired with the Audience Choice Award Ballot QR code (`kremfest_2026_vote_color.svg`) linking to `wulfdesign.github.io/kremfest-xr/2026/vote/`.
     • *Slides 3–12 — 10 Individual Experience Showcase Cards:* Comprehensive cards for Headliners (*Maiden Flight*, *High Desert Eclipse*), Guest Spotlight (*djay by Algoriddim*), and 7 Juried Selections (*Trip the Light*, *CONNECTOME*, *CONSTELLATIONS*, *Project Hydra*, *Artemis*, *We Are Dead Animals*, *Firedrake VR*) with genre-coded neon borders, creator bylines, loglines, curator quotes, and scannable QR HUDs.
     • *10-Second Default Slide Rotation & Active Real-Time Countdown Ticker:* Replaced static `(2s)` badge. Slides rotate at 10-second default intervals with an active ticking countdown badge (`10s... 1s`) and a sleek animated cyan-to-magenta progress bar along the top of each card.
     • *Interactive Duration Settings & Navigation HUD:* Built sticky controls bar featuring duration presets (`5s`, `8s`, `10s` [default], `15s`, `20s`), loop playback controls (`Prev`, `Pause / Resume`, `Next`), slide select dropdown (12 slides), query parameter deep-linking (`?slide=...`, `?duration=...`, `?loop=0`), and keyboard hotkeys (Space to toggle pause, Arrows to skip, F/F11 for fullscreen TV display).
   - **Dev Dashboard Tab 14 & Version Bump to `v0.1.97`:** Synchronized Dev HUD Tab 14 (`🎬 Sizzle Reel & Floor Loop`) header with the 12-slide sequence architecture and direct launcher button. Bumped Operator HUD badge to `v0.1.97`.
   - **Isolated Dev Sandbox Mirror on Port 3040 (`/dev/`):** Established a dedicated, air-gapped dev environment (`private/dev_site/`) served directly on Port 3040 under `/dev/`, `/dev/2026/`, `/dev/2025/`, `/dev/2019/`, `/dev/2018/`, `/dev/2017/`, and `/dev/vote/`. Guarantees 100% isolation of the live public preview on Port 3039. Added sticky top Dev Sandbox Banner on Port 3040 dev pages with 1-click navigation between Dev Home, Dev 2026, Dev 2025, Social Card, and Back to Dev HUD.
   - **Explicit Integer Numbering on All 15 Dev HUD Tabs:** Numbered all navigation tab buttons sequentially from `1. 📥 Ingest FilmFreeway Text` through `15. 🔒 Confidential History` across `build_social_hub.py` and `dev_dashboard/index.html`.
   - **"Lineup at a Glance" Block Realignment (2025 & 2026):** Repositioned the "Lineup at a Glance" section in both retrospective 2025 and live 2026 showcase pages (`publish_to_public.py` and `render_staging_preview.py`) to appear towards the top immediately after the intro text and first diamond divider, directly preceding `<h2 class="group-heading">Headline Experiences from UpLiftVR Studios</h2>`. Matches the proven, elegant hierarchy from 2018 and 2019.
   - **1-Page "At a Glance" Social Media Card & HTML-to-Image Studio:** Designed a high-contrast 1200px visual lineup card (`private/preview/social_lineup_card.html`) featuring the 2026 Gold Laurels, glowing title banner, venue/hours metadata, optical scan QR code, and 10 mini cards with shrunk poster artwork, creator bylines, runtimes, formats, and origins. Embedded local offline `html2canvas.min.js` with 1-click **"📸 Download High-Res PNG"** (2x Retina 2400px output), **"📋 Copy Image to Clipboard"** (direct `Ctrl + V` into LinkedIn/Facebook), and Print / Save PDF. Captured and verified master clean asset on disk: `assets/images/2026/kremfest_xr_2026_lineup_one_sheet.png` (413 KB).
   - **Dev Dashboard Tab 6 Integration:** Embedded interactive visual card preview, 1-click PNG download, and direct studio launcher into **Tab 6 (📢 Social Media & Press Copy)** directly above the LinkedIn and Facebook copy.

1. **2026 Laurels Vector Calibration, Algoriddim djay Executive Delivery, Dimitri Vallein Response & Final Lineup Social Launch Suite (v0.1.95 - Sept 22, 2026):**
   - **Inkscape 2026 Laurels Master Synchrony:** Magus Wulf updated and refined master Inkscape vector laurels from 2025 to 2026, saved source SVGs in `private/import/`, exported transparent PNGs (Gold, White, Cyan, Black), and pushed to public GitHub main. Synchronized all assets into `private/assets/images/2026/laurels/`.
   - **Algoriddim djay Executive Spotlight & Laurels Delivery:** Authored formal executive correspondence to Karim Morsy & Richard delivering official laurels, VIP artist pass reservations at Kremwerk Will-Call, and commitment to share post-festival attendee MR media. Staged in `private/operations/email_draft_algoriddim_djay_laurels.md`.
   - **Dimitri Vallein Response (The Last Star VR):** Formulated a courteous, encouraging response explaining closed submissions and standalone Quest 3 hardware constraints 48 hours prior to doors; invited early submission for 2027. Staged in `private/operations/email_draft_dimitri_the_last_star_vr.md`.
   - **Final Official Selections Social Media Campaign & Group Strategy:** Authored high-impact LinkedIn campaign celebrating the locked 10-experience lineup, and high-energy Facebook post with recommended Seattle cross-posting groups (Seattle Fun Events, SEMP, Seattle VR, Capitol Hill, Emerald City EDM). Staged in `private/operations/social_media_final_lineup_announcement.md`.
   - **Pre-Festival 48-Hour Hardware/Web Roadmap:** Codified prioritized action schedule for Wednesday Sept 23 & Thursday Sept 24 (iPad/laptop casting link rehearsal, Maiden Flight landing portal & wishlist, Amazon Associates reactivation, and travel pack-out).
   - **Floor Hardware Operational Contingencies (CONSTELLATIONS & Maiden Flight):**
     • *CONSTELLATIONS: Touch the Stars:* Previous app key expired; operator pinged Grant Hinkson for replacement. Pragmatic contingency: if Grant cannot respond by Thursday evening, purchase directly for ~$7 on Meta Horizon Store (gifting Grant's key later) to ensure zero friction on opening night.
     • *Maiden Flight:* Realistic triage confirmed: forgo complex rebuilds/overhauls before the festival and focus strictly on verifying smooth standalone and tethered in-headset playback.

1. **Submissions Closed Callout Modernization & Festival Premiere Countdown Alignment (v0.1.94 - Sept 22, 2026):**
   - **Callout Modernization:** Transmuted the obsolete "More Selections Coming Soon" block into "Submissions Closed — Festival Premiere Ahead!" across homepage and 2026 subpage. Copy celebrates the locked 10-experience lineup for this coming weekend (September 25–27, 2026).
   - **Active Showtime Countdown Maintained:** Preserved the live purple countdown ticking down to Friday, Sept 25 at 10:00 PM PDT. Updated `main.js` clock engine subtext to confirm lineup locked and floor opening hours.
   - **Strikethrough Deadlines & Action CTAs:** Past deadlines (Aug 31 and Sept 21) styled with strikethrough and pink `[CLOSED]` badges. Added dual CTAs: direct link to official festival passes and an archive link to FilmFreeway.
   - **Full Recompilation:** Recompiled all 8 public static pages, staging sandbox, and Dev HUD. Validated 100% clean Node.js script execution.

1. **Firedrake Exploration Alpha & We Are Dead Animals Live Lineup Promotion, Official Selection Laurels Suite & Creator Notification Engine (v0.1.93 - Sept 22, 2026):**
   - **In-Headset Verification & Promotion:** Magus Wulf empirically tested *Firedrake VR: The Wizard's Warren Demo* and *We Are Dead Animals* in Meta Quest 3. Both passed in-headset QA and were promoted from `staging_vault.json` to the live public catalog (`lineups.json`). Total live selections: 10 (8 curated selections + 2 headliners).
   - **Exploration Alpha Lore:** Updated Firedrake synopsis with author's custom text emphasizing hands-on dungeon exploration, mysterious rooms, and ancient magic pacing.
   - **Official Selection Laurels Suite:** Generated high-resolution transparent PNGs (1200×640) and vector SVG across Gold, White, Neon Cyan, and Obsidian Black in `assets/images/2026/laurels/`. Hosted via GitHub Pages CDN for instant creator download.
   - **Creator Notification Suite:** Authored FilmFreeway acceptance notification, formal laurels follow-up email, and respectful non-selection template in `private/operations/filmfreeway_acceptance_and_laurels_notification.md`.
   - **1-Click Dev HUD Integration:** Embedded notification cards with 1-click clipboard triggers (`copyToClipboard`) and laurel download links in Tab 1 (`tab-ingest`) on Port 3040.
   - **Full Static Recompile:** Recompiled all 8 public static pages, Audience Choice ballot, and staging previews. Validated 100% clean Node.js script execution.

1. **Lunar Flyby XR v2.1.19 Production Release & Hands-Free Festival Announcement Suite (Sept 21, 2026):**
   - **Curatorial Promotion:** Promoted and verified turnkey hands-free autopilot mode for festival floor visitors, compressing the 800,000 km cislunar voyage into a calibrated 16-minute WebXR experience.
   - **Festival Announcement Authored:** Staged community and social spotlight in `private/strategy_and_marketing/lunar_flyby_xr_festival_announcement.md`.
   - **Tasks Ledger Updated:** Moved Lunar Flyby XR task to `🧪 Waiting for QA` in `tasks.md` and added festival announcement task to Active Roadmap.

1. **Local Promo Integration & DJ Julia Camp Lineup Status Update Suite (v0.1.92):**
   - **Curatorial Status Report Email to DJ Julia Camp:** Authored warm, collaborative check-in to DJ Julia Camp (`djjulia@gmail.com` / `dj.julia.camp@...`) detailing active live lineup on `2026/index.html`, inclusion of *djay by Algoriddim* on Quest 3 with live spectator casting, and FilmFreeway regular deadline closing Monday Sept 21.
   - **Local Calendar Promo Integration:** Wove strategic triage note regarding local calendar listings (The Stranger / EverOut, Do206) with potential Sunday submission, prioritizing headset calibration and offering a collaborative cross-link to Kremwerk's PR team.
   - **Technical Testing & Setup Window:** Scheduled Sunday & Monday testing window covering standalone Quest 3 floor calibration, Quest 2 backup readiness, and latency-free TV spectator projection.
   - **Staging Vault Candidate Adjudication:** Communicated holding pattern for *Firedrake VR* (awaiting Jon Stone's explore mode APK) and *We Are Dead Animals* (in-headset comfort/runtime evaluation) with goal of graduating both to lineup by Monday.
   - **Private Sanctuary & 1-Click Dev HUD Integration:** Updated `private/operations/email_draft_dj_julia_lineup_update.md`, integrated dedicated correspondence card with 1-click clipboard copy buttons into Dev HUD Tab 8 (`render_festival_ops.py`), and recompiled `dev_dashboard/index.html`. Verified clean Node.js script execution and HTTP 200 on Port 3040.

2. **djay by Algoriddim Lineup Announcement Suite, Social Media Hub Integration & Executive Follow-Up Letter (v0.1.90):**
   - **Agency-Grade LinkedIn Campaign (Post 23):** Crafted professional announcement celebrating *djay by Algoriddim* joining KremFest XR 2026 as our Guest Experiential Spotlight on Meta Quest 3. Highlights tactile vinyl manipulation, full-color MR passthrough, TV spectator casting, and streaming via Beatport/Tidal. Linked to the live portal lineup with an urgency call for the FilmFreeway deadline (Monday, Sept 21 at 23:59 PDT) and full industry hashtags (`#djay`, `#djayPro`, `#Algoriddim`, `#SpatialComputing`, `#VRDJ`, `#MetaQuest3`).
   - **Seattle Nightlife Facebook Campaign (Post 24):** Formulated a high-energy community post targeting Seattle electronic music producers, local DJs, and creative technologists, emphasizing hands-on virtual vinyl scratching, spectator screen mirroring, and the final 72-hour countdown to submit immersive music videos and VR shorts before Monday midnight.
   - **Executive Follow-Up & Lineup Announcement Letter to Algoriddim:** Authored formal executive letter for Richard (Ticket `#259545`) & Karim Morsy (CEO, Algoriddim) confirming Quest keys calibrated across headsets, permanent festival portal showcase, live tracked Meta Horizon Store QR campaign (`utm_source=kremfest_xr&utm_medium=festival_showcase&utm_campaign=kremfest_2026_curated`), and commitment to share post-festival attendee footage and photos.
   - **Private Sanctuary Placement & 1-Click Clipboard Controls:** Placed complete copy in `private/strategy_and_marketing/djay_algoriddim_announcement_and_followup.md`, appended Phase 5.5 to `social_media_campaign_launch_2026.md`, added Post 23 & 24 with 1-click clipboard copy triggers in Dev HUD Tab 6 (`build_social_hub.py`), and upgraded Tab 10 (`render_sidequest.py`) with companion triggers. Recompiled and verified on Port 3040.

2. **Empirical QR Verification Sign-Off, Lunar Flyby Link Alignment & Memory Codification (v0.1.89):**
   - **Empirical Optical QA Pass:** Magus Wulf personally verified that all on-screen QR codes rapidly acquire on phone camera scan.
   - **Lunar Flyby XR Project Link Alignment:** Updated the right-flanked QR code for *Artemis: The Free Return* to point to the official project website (`https://github.com/wulfdesign/lunar-flyby-xr/`) instead of the FilmFreeway entry, with label `💻 PROJECT SITE`.
   - **Repository Memory Codification:** Appended Section 5 to `AGENTS.md` specifying square module drawers, Error Correction Level `M`, 100px card QRs, 130px ticket passes, 170px gateway banners, and top-level JS variable declarations.
   - **Task Ledger Pruning:** Archived all 37 completed and verified sprints into `COMPLETED.md` with complete historical lineage.

2. **Submission QR Expansion (+30% to 100px) & Onsite Mobile Gateway Enlargement (+30% to 170px) (v0.1.88):**
   - **Submission Card QRs Enlarged to 100px:** Scaled all flanked experience QR cards from 76px to 100px (+31.5% size increase) across `.card-qr-box`, `.card-qr-img`, and inline template renders in both `publish_to_public.py` and `render_staging_preview.py`. Provides greater scanning acquisition range while preserving comfortable layout margins on desktop and cleanly collapsing to vertical stack on mobile screens (<=700px).
   - **Onsite Attendee & Voter Portal QR Enlarged to 170px:** Scaled the bottom on-premise mobile portal gateway banner QR code from 130px to 170px (+30.7% size increase) across `style.css`, inline styles, and staging sandbox, with upgraded `24px` cyan/pink neon glow.
   - **Interactive Modal Trigger on Onsite Gateway:** Wired `openPortalModal()` click trigger onto the onsite portal QR link in both public and staging previews.
   - **Recompiled & Verified:** Recompiled all 8 public static pages, staging preview, and dev dashboard. Tested with 0 errors across Port 3039 and Port 3040.

2. **Partner UTM Tracking Restoration, Scan-to-Phone Modal Fix & Ticket Pass Click-to-Zoom Expansion (v0.1.87):**
   - **Partner UTM Parameters Fully Restored:** Restored all exact promised `?utm_source=...` campaign tracking links across all festival experiences, ticketing links, and marketing correspondence (`lineups.json`, `generate_lineup_qrs.py`, `publish_to_public.py`, `render_staging_preview.py`).
   - **Hero "📱 Scan to Phone" Bug Resolution:** Diagnosed and fixed the unhandled `ReferenceError: Cannot access 'simulationState' before initialization` in `assets/js/main.js` (caused by a Temporal Dead Zone variable declaration). Also embedded self-contained inline modal controllers directly inside compiled pages to guarantee robust modal operation even across network blips.
   - **Ticket Pass QR Enlargement & Interactive Zoom Modal (`#qr-zoom-modal`):** Enlarged bottom kiosk ticket passes (Friday, Saturday, Weekend) from 76px to 130px with amber neon frames and hover lift. Added click-to-zoom modal expansion displaying a crisp 240px QR code with direct checkout action button, backdrop dismissal, and `Escape` keyboard shortcuts.
   - **48 Crisp Square-Module QR Codes Re-Rendered:** Regenerated all 48 styled QR code images (24 Neon Dark Mode + 24 Print Light Mode) using `SquareModuleDrawer` and Error Correction `M` into both public and private asset trees.
   - **Curatorial Air-Gap Preserved:** Confirmed *Firedrake VR* and *We Are Dead Animals* safely remain in `staging_vault.json` pending in-headset APK evaluation.

2. **Live Lineup Pullback (Firedrake & We Are Dead Animals) to Staging Vault & Recompilation (v0.1.86):**
   - **Curatorial Pullback Execution:** Safely removed *Firedrake VR* and *We Are Dead Animals* from `lineups.json` (`years["2026"]["selections"]`), restoring the live public lineup to confirmed core selections (6 selections + 2 headliners).
   - **Pullback Engine & REST Endpoint:** Added `pullback_candidate()` function and `--pullback` CLI flag in `promote_candidate.py`, plus `/api/staging/pullback` route in `private/dev_dashboard/server.py`.
   - **Staging Vault Restoration:** Restored both works into `staging_vault.json` with `app_key: false`, retaining full correspondence logs and updating notes to reflect pending APK delivery and headset verification.
   - **Verification:** Verified 0 occurrences of Firedrake/Dead Animals on Port 3039 (`2026/index.html` and ballot). Verified both candidates remain fully active in the Staging Sandbox (`/preview/staging`).

2. **QR Density De-Cluttering, Square Module Drawer Conversion & Full UTM Tracking Purge (v0.1.85):**
   - **Full UTM Parameter Purge:** Purged all `utm_` parameters across `QR_MANIFEST`, `EXPERIENCE_QR_MAP`, `lineups.json`, `qr_code_generator.py`, `publish_to_public.py`, and `render_staging_preview.py`.
   - **Density Reduction:** Dropped QR version from Version 13 (69×69 grid = 4,761 cells) down to Version 2–4 (25×25 to 33×33 grid = 625–1,089 cells). Individual module block dimensions increased by over 300% inside on-screen 76px and 130px display containers.
   - **Solid Square Modules (`SquareModuleDrawer`):** Replaced circular/rounded dots with crisp square module blocks. Squares deliver 100% optical fill factor (eliminating the ~21.5% optical corner void of circles), sharp right angles, and instantaneous finder pattern lock for phone cameras.
   - **Error Correction Calibration:** Lowered error correction from `ERROR_CORRECT_H` (30%) to `ERROR_CORRECT_M` (15%), eliminating unnecessary parity overhead.
   - **Regeneration & Verification:** Regenerated all 48 QR assets (Neon + Print), recompiled all static pages, and verified 0 `utm_` and 0 `↗` occurrences across public and private HTTP endpoints.

2. **Public QR Sizing Fortification & Staging-to-Public Promotion Engine (v0.1.84):**
   - **5-Layer QR Sizing Defense:** Completely eliminated oversized QR renderings on `http://localhost:3039/2026/index.html` by enforcing inline HTML dimensions (`width="76" height="76"`), explicit inline styles on container and image tags, head-injected `<style>` blocks, and CSS cache-busting.
   - **Candidate Promotion Engine (`promote_candidate.py`):** Standalone CLI tool and Python API for single (`<candidate_id>`) or batch (`--all`) candidate promotion from `staging_vault.json` into `lineups.json` with private links quarantine and auto-recompilation.
   - **Dual UI Controls:** Added `🚀 Promote All to Live Lineup (Batch)` buttons and per-candidate promote triggers in Dev HUD Tab 2 and the Staging Sandbox preview (`/preview/staging`).
   - **Live Selections Promoted:** Promoted *Firedrake VR* and *We Are Dead Animals* into live selections (8 total selections live on Port 3039).


1. **GeekFest-Architecture Styled QR Codes, Flanking Card Layout, Mobile Scan Modal & 16:9 Landscape Bookend Splash Studio (v0.1.75):**
   - **42 Styled Colored-Block QR Codes Generated (`generate_lineup_qrs.py`):** Re-engineered the GeekFest West Python `StyledPilImage` + `RoundedModuleDrawer` + `RadialGradiantColorMask` engine (`qrcode[pil]` with `ERROR_CORRECT_H` 30% redundancy). Generated 42 high-resolution QR assets across all 10 experiences (*Maiden Flight*, *High Desert Eclipse*, *Trip the Light*, *djay by Algoriddim*, *CONNECTOME*, *CONSTELLATIONS*, *Project Hydra*, *Artemis*, *We Are Dead Animals*, *Firedrake VR*) and the main portal. Features two distinct colorways:
     - **Cyberpunk Neon Dark Mode:** Obsidian background `(10, 10, 18)` with electric hot pink `(255, 0, 128)` center transitioning to cyber cyan `(0, 240, 255)` on edges.
     - **Print-Ready Light Mode:** Pure white background with deep magenta-purple `(180, 0, 100)` center transitioning to sapphire blue `(0, 100, 180)` on edges.
   - **Flanking Card Action Row Layout:** Upgraded `render_staging_preview.py` so each project card is flanked by scannable QR cards: Far Left (Website QR, 76px cyan neon glow) and Far Right (Quest Store / Trailer QR, 76px magenta neon glow) surrounding the center text buttons.
   - **Interactive `[ 🎴 QR Badges: ON / OFF ]` Setting Toggle:** Integrated a real-time toggle into the Sandbox HUD bar with `localStorage` persistence, allowing instant switching between high-tech scannable cards and sleek text-only buttons.
   - **On-Screen Mobile Scan-to-Phone Modal:** Added `[ 📱 Scan to Phone ]` button in the sandbox HUD and hero section, opening a cybernetic modal with a high-contrast glowing QR code so attendees looking at the table screen can scan and load the portal on their own phones.
   - **16:9 Landscape Sizzle Reel Splash Card Studio Deployed:** Built `render_splash_cards.py` creating `private/preview/splash_cards.html` (served live at `/preview/splash_cards.html` on Port 3040). Features 1920×1080 landscape bookend cards with hero key art on the left and a high-contrast 200px glowing QR code on the right, toggleable between Intro Announcement Splash (2s) and Recap Bookend Splash (3s), with fullscreen F11 TV display mode.
   - **Bookended Sizzle Manifest & Tab 15 Upgrade:** Upgraded `sizzle_reel_manifest.json` and Tab 15 in `render_sizzle_reel.py` to a 129s (~2:09) loop mapping the Intro Splash &rarr; Motion Clip &rarr; Recap Splash with QR architecture across all 10 experiences, with direct links to the Splash Studio.

2. **Festival Sizzle Reel & Floor Loop Studio (Tab 15), Algoriddim Correspondence Thread & Thank You Response Engine (v0.1.74):**
   - **Algoriddim Full Correspondence Thread & Sent Email Sync:** Ingested the exact sent message from Larry James (Sept 16, 10:15 GMT+3) and Richard's confirmation responses (Ticket #259545) into `staging_vault.json` and Tab 10 (`render_sidequest.py`). Authored ready-to-send Message 4: official Thank You response confirming Quest 3 & Quest 2 calibration, sharing live lineup and staging sandbox links, and highlighting the 8.5×11 print flyer and tracked QR codes.
   - **Firedrake VR Correspondence Sync:** Logged Jon Stone's delivery timeline for a 6–10 min liminal exploration build with combat stripped for nightclub flow.
   - **Festival Sizzle Reel & Floor Monitor Attractor Loop Studio Deployed (Tab 15):** Built `render_sizzle_reel.py` adding Tab 15 (`🎬 Sizzle Reel & Floor Loop`) to Dev HUD (Port 3040). Created `sizzle_reel_manifest.json` with 12 sequenced cues across all 10 confirmed & staged experiences (~90s total duration) with direct timecode cuts, clip status badges, 1-click clipboard ffmpeg concatenation scripts, and `/api/sizzle-reel` REST GET/POST API in `server.py`.
   - **Created Video Staging Directory Tree:** Established `private/video_staging/{clips,renders,data}` for local media ingestion and staging without cluttering the public repo.

2. **Air-Gapped Staging Sandbox Preview, Dynamic Public Site Simulator & Dev HUD Integration (v0.1.73):**
   - **Zero-Modification Public Site Simulator:** Built `render_staging_preview.py` which takes the private candidates from `staging_vault.json` (*djay by Algoriddim*, *We Are Dead Animals*, *Firedrake VR: Wizard's Warren*) and merges them into the 2026 festival showcase page in-memory without altering a single byte of `lineups.json`, `index.html`, `2026/index.html`, or public voting ballots.
   - **Dual-Mode Interactive Simulation HUD Bar:** Embedded a sticky cybernetic sandbox navigation bar at the top with jump anchors (`Headliners`, `VIP`, `Staged`, `Ballot`), refresh trigger, and Dev HUD shortcut. Features 1-click mode toggle between:
     - **✨ Exact Public Look:** Removes all staging badges and dashed borders, displaying the exact pristine public page appearance as if all staged entries were live.
     - **🧪 Highlight Staged Items:** Re-enables neon pink staging indicators, readiness scores, and direct Dev HUD edit jumps.
   - **Integrated Staged Ballot & Lineup at a Glance:** Injected an interactive 2026 Audience Choice Ballot preview containing all 10 candidates (2 headliners, 5 confirmed selections, and 3 staged works) with live radio selection, and updated the Lineup at a Glance box.
   - **Server Routing & Dev HUD Integration:** Wired `/preview/staging`, `/preview/2026`, and `/private/preview/` in `server.py` (Port 3040). Added `/api/staging/compile-preview` endpoint. Added 1-click buttons in Dev HUD header, Tab 2 header, and per-card `👁️ Preview in Sandbox ↗` jump links.
   - **Verified Clean Asset Delivery:** Tested HTTP 200 on all HTML, stylesheets, scripts, and staged 1440&times;810 key art images.

2. **Algoriddim djay Meta Quest Keys Granted (Ticket #259545), Staged Lineup Integration & Club Print Assets (v0.1.72):**
   - **Keys Granted:** Richard (Rich @ Algoriddim Support) approved Larry James's official festival invitation and issued **TWO full Meta Quest app keys** for *djay* on Meta Quest 3 & Quest 2. Support coverage active directly via Ticket #259545.
   - **Correspondence Logged:** Updated Dev HUD Tab 10 (`🎧 DJ VR SideQuest & Curated Outreach`) with an official resolution log card displaying the complete email thread, key statuses, and direct jump buttons to the Staging Vault and Print Studio.
   - **Air-Gapped Candidate Staging:** Staged *djay by Algoriddim* into `staging_vault.json` (`staged-curated-djay-algoriddim`, 100% readiness score, 6/6 deliverables verified) with official 1440&times;810 hero key art (`assets/images/2026/djay_algoriddim_2026.jpg`). Formulated low-key floor deployment doctrine: runs as an active background hands-on app for attendees between curated film sessions. 100% air-gapped from public site pending Larry's review.
   - **Printable Nightclub Flyer & Quick-Start Guide:** Authored [`private/print/djay_club_flyer_and_instructions.html`](file:///C:/Agents/a0-symbiot-ai/projects/kremfest-xr/private/print/djay_club_flyer_and_instructions.html):
     - Page 1: 8.5x11 nightclub flyer highlighting Quest 3 passthrough, optical hand tracking, venue TV mirroring, and tracked QR code to Meta Quest Store.
     - Page 2: 5-step intuitive attendee onboarding guide (Fit, Pinch to Scratch, Play/Cue, Crossfader, Spatial FX Pad) and operator hygiene rules (5–8 min limit, silicone interface disinfection only).
   - **Server & Routes Refreshed:** Added `/private/print/` routing to `server.py` and recompiled Dev HUD HTML (Node `vm.Script` 100% clean).

2. **Day 2 Hardware Secured: Storage Swap, Quest 2 Backup, Luggage Cart & Fairy Lights (v0.1.71):**
   - Successfully executed Day 2 physical logistics haul: returned non-essential belongings to storage to free up living room and establish an uncluttered staging bench on the boat.
   - Retrieved and secured essential festival floor hardware:
     - 🛒 **Wheeled Luggage Cart:** Verified and ready for ground transport on Friday load-in and Sunday strike.
     - 💡 **Purple Christmas & Perimeter Fairy Lights:** Secured for venue table boundary demarcation and player safety ring.
     - 🥽 **Meta Quest 2 Headset & Touch Controllers:** Standby unit safe at boat bench, ready for charging and secondary build testing.
     - 📺 **Extra HDMI Cable:** Secured for laptop-to-venue wall TV mirroring.
   - Checked off item `ops-d2-0a` in `private/submission_pipeline/data/festival_ops_checklist_status.json`.
   - Pre-staged Thursday (Day 3) agenda: morning calendar announcements blitz (EverOut, Do206, RA, GeekWire) and in-headset testing window for *We Are Dead Animals* APK and Jon Stone's *Firedrake VR* 24h liminal exploration build.

2. **EverOut.com 1:1 Live Form Field Assistant & Promotional Asset Integration (v0.1.70):**
   - Upgraded Tab 14 (`📅 Seattle Event Listings & Announcements`) in `render_event_listings.py` with an integrated 1:1 live form field companion matching `everout.com/seattle/events/submit/` line-for-line.
   - Built 1-click clipboard triggers across all 10 EverOut form fields: Title, Location ("Kremwerk" / "1809 Minor Ave"), Category ("Nightlife" / "Performance"), Description (156 words, editorial-optimized, confirmed lineup only), Age ("21+"), Price ("Included with KremFest Pass ($25–$45)"), Event Date & Time across both nights (Friday Sept 25 & Saturday Sept 26, 10 PM to 1 AM nightly), Links (Ticket & Event website), Image Upload Spec Compliance (&ge;700x450px, &lt;3MB, featuring `trip_the_light_2026.jpg` 1440&times;810 px • 140 KB with direct download button and local path copy), Video Embed (`youtu.be` link), Contact Info (`wulfdesign@gmail.com` / Larry James), and Checkbox Safety Protocol (warning to leave paid advertising unchecked to prevent sales calls).
   - Recompiled Dev HUD HTML and verified JavaScript syntax with Node `vm.Script` (100% clean).

2. **Seattle Event Calendar Listings & Announcements Hub Deployed (Tab 14 / v0.1.69):**
   - Engineered modular generator `private/submission_pipeline/tools/render_event_listings.py` deploying Tab 14 (`📅 Seattle Event Listings & Announcements`) in the Dev HUD (Port 3040).
   - Targeted 7 open public event listing portals that accept submissions without requiring private press clearance: The Stranger / EverOut Seattle, Do206, Resident Advisor (RA.co), GeekWire Events, Capitol Hill Seattle (CHS Blog), Luma Seattle (lu.ma/seattle), and The Seattle Times (Evvnt portal).
   - Formulated Quick-Copy Master Event Metadata grid (Full/Short/Nightlife titles, dates, showcase hours 10 PM–1 AM, venue Kremwerk 1809 Minor Ave, age 21+, admission, categories/tags, official links) with 1-click clipboard triggers for rapid form filling.
   - Authored 4 tiers of promotional copy (Tier 1 Quick Hook ~35w, Tier 2 Short Calendar Blurb ~80w, Tier 3 Medium Description ~160w, Tier 4 Comprehensive Feature ~320w) strictly featuring confirmed official 2026 selections (*Trip the Light*, *CONNECTOME*, *CONSTELLATIONS*, *Project Hydra*, *High Desert Eclipse*, *Maiden Flight*, *Artemis Lunar Flyby* + live Audience Choice voting).
   - Built 7 interactive portal tracking cards with checkbox, submission date, reference link/ref, internal notes, and direct external submit portal buttons (`Open Submit Portal ↗`).
   - Integrated REST persistence via `/api/event-listings` (GET and POST) in `private/dev_dashboard/server.py` with LocalStorage fallback, real-time progress bar, and 1-click Markdown status report export.
   - Logged Jon Stone's / *Firedrake VR* 24-hour delivery confirmation of a 6–10 min liminal exploration build in `staging_vault.json` (status: `"build_in_prep"`, air-gapped from public).
   - Logged Larry's live LinkedIn lineup update (`https://lnkd.in/p/grAQV8sR`) in `social_campaign_status.json`.
   - Recompiled `private/dev_dashboard/index.html`, validated JavaScript syntax with Node `vm.Script` (100% clean), and restarted server on Port 3040.

2. **Wednesday & Thursday Execution Roadmap: Storage Swap, In-Headset APK Testing, Social Media Broadcast & Seattle Event Announcements Blitz (v0.1.68):**
   - Calibrated Day 2 (Wednesday, Sept 16) and Day 3 (Thursday, Sept 17) operations schedule in `render_festival_ops.py` (Tab 9: `🎒 Festival Ops & Countdown`).
   - Added dedicated action items for:
     1. **Storage Unit Retrieval & Boat Room Clearing Run:** Retrieve Meta Quest 2 backup headset, spare controllers, backup cables, and purple/red perimeter fairy lights; transfer non-essential boat belongings back to storage to clear workbench and living room space on the boat.
     2. **In-Headset Sideload & Testing Window (Wed & Thu):** Multi-day testing window for candidate builds: sideloading and testing *We Are Dead Animals* (`KW2320` standalone APK) and *Firedrake VR* (`KW2319`) on Quest 3 and Quest 2, equipped with a 1-click `🧪 Open Staging Vault (Tab 2)` jump button.
     3. **Mid-Week Social Media Broadcast:** Dispatch at least one campaign post from Tab 6 (e.g. Post 19: Mid-Week Countdown & Artist Spotlight) with an interactive `📢 Open Social Media Hub (Tab 6)` button.
     4. **Seattle Event Calendar Announcements Blitz:** Embedded direct submission links for The Stranger / EverOut, Do206, Resident Advisor, GeekWire, CHS Blog, and Luma Seattle directly into the checklist item.
   - Recompiled `dev_dashboard/index.html` via `build_social_hub.py`, verified syntax with Node `vm.Script` (100% clean), and confirmed live Port 3040 server rendering all items and interactive buttons.

2. **Firedrake VR Staged Poster Integration, Waiver-Free Correspondence & Quick Phone SMS Hub (v0.1.67):**
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

1. **Empirical Local QA Sign-off:**
   - Magus Wulf verifies `http://localhost:3040/preview/splash_cards.html` (Sizzle Reel floor loop with `Syne 800` typography, unbordered de-letterboxed 460px KremFest poster, 420px landscape experiences, and sleek 290px QR column) and `http://localhost:3039/index.html` (Centered glance sections, clean public showcase).
2. **Pre-Festival 48-Hour Headset & Hardware Rehearsal:**
   - Doors open Friday, September 25 at 10:00 PM PDT! Standalone Meta Quest 3 floor calibration, TV HDMI mirroring, and iPad queue screen standby.
3. **Public GitHub Remote Synchronization Gate:**
   - When Magus Wulf confirms local empirical QA pass, synchronize local commits through `v0.2.7` to GitHub `origin/main`. (Strictly local-only until confirmed).
