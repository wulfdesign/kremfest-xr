document.addEventListener("DOMContentLoaded", () => {
  initModals();
  initVoting();
  initVotingCountdown();
  initSearch();
});

/* --------------------------------------------------------------------------
   Modal Engine
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlay = document.getElementById("project-modal");
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector(".modal-close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => closeModal());
  }

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Attach click listeners to all detail buttons
  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const card = btn.closest(".film-card");
      if (!card) return;

      const title = card.getAttribute("data-title") || "";
      const directors = card.getAttribute("data-directors") || "";
      const origin = card.getAttribute("data-origin") || "";
      const runtime = card.getAttribute("data-runtime") || "";
      const format = card.getAttribute("data-format") || "";
      const genre = card.getAttribute("data-genre") || "";
      const comfort = card.getAttribute("data-comfort") || "";
      const synopsis = card.getAttribute("data-synopsis") || "";
      const accolades = card.getAttribute("data-accolades") || "";
      const link = card.getAttribute("data-link") || "";

      openModal({
        title,
        directors,
        origin,
        runtime,
        format,
        genre,
        comfort,
        synopsis,
        accolades,
        link,
      });
    });
  });
}

function openModal(data) {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  const titleEl = modal.querySelector(".modal-title");
  const metaEl = modal.querySelector(".modal-meta-grid");
  const synopsisEl = modal.querySelector(".modal-synopsis-text");
  const accoladesEl = modal.querySelector(".modal-accolades-text");
  const actionEl = modal.querySelector(".modal-action-btn");

  if (titleEl) titleEl.textContent = data.title;
  if (synopsisEl) synopsisEl.textContent = data.synopsis;

  if (metaEl) {
    metaEl.innerHTML = `
      <div><strong>Director(s):</strong> ${escapeHtml(data.directors)}</div>
      <div><strong>Origin:</strong> ${escapeHtml(data.origin)}</div>
      <div><strong>Runtime:</strong> ${escapeHtml(data.runtime)}</div>
      <div><strong>Format:</strong> ${escapeHtml(data.format)}</div>
      <div><strong>Genre:</strong> ${escapeHtml(data.genre || "Immersive Media")}</div>
      <div><strong>VR Comfort:</strong> ${escapeHtml(data.comfort || "Comfortable")}</div>
    `;
  }

  if (accoladesEl) {
    if (data.accolades) {
      accoladesEl.parentElement.style.display = "block";
      accoladesEl.textContent = data.accolades;
    } else {
      accoladesEl.parentElement.style.display = "none";
    }
  }

  if (actionEl) {
    if (data.link && data.link !== "#") {
      actionEl.href = data.link;
      actionEl.style.display = "inline-flex";
    } else {
      actionEl.style.display = "none";
    }
  }

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

/* --------------------------------------------------------------------------
   Live Search & Filter Engine
   -------------------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById("selection-search");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll(".film-card");

    cards.forEach((card) => {
      const text = card.textContent.toLowerCase();
      if (!query || text.includes(query)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Audience Choice Live Countdown & Schedule Engine
   -------------------------------------------------------------------------- */
let simulationState = null; // null = real time, 'prevoting', 'open', 'closed'

function initVotingCountdown() {
  const countdownBox = document.getElementById("vote-countdown-box");
  if (!countdownBox) return;

  const startIso = countdownBox.getAttribute("data-start-time") || "2026-09-25T00:00:00-07:00";
  const endIso = countdownBox.getAttribute("data-end-time") || "2026-09-27T23:59:59-07:00";

  const startTime = new Date(startIso).getTime();
  const endTime = new Date(endIso).getTime();

  function updateClock() {
    const now = new Date().getTime();
    let effectiveNow = now;

    // Simulation overrides for QA testing
    if (simulationState === "open") {
      effectiveNow = startTime + 3600000; // 1 hour into voting
    } else if (simulationState === "closed") {
      effectiveNow = endTime + 3600000; // 1 hour after voting closes
    } else if (simulationState === "prevoting") {
      effectiveNow = startTime - 86400000; // 1 day before voting
    }

    const badgeEl = document.getElementById("countdown-badge");
    const subtextEl = document.getElementById("countdown-subtext");
    const daysEl = document.getElementById("count-days");
    const hoursEl = document.getElementById("count-hours");
    const minsEl = document.getElementById("count-mins");
    const secsEl = document.getElementById("count-secs");
    const voteForm = document.getElementById("kremfest-vote-form");
    const submitBtn = voteForm ? voteForm.querySelector("button[type='submit']") : null;
    const lockNotice = document.getElementById("ballot-locked-notice");

    countdownBox.classList.remove("state-prevoting", "state-open", "state-closed");

    if (effectiveNow < startTime) {
      // Phase 1: Pre-Voting (Yellow)
      countdownBox.classList.add("state-prevoting");
      if (badgeEl) badgeEl.innerHTML = "⏳ VOTING OPENS IN";
      if (subtextEl) {
        subtextEl.innerHTML = "Voting opens <strong>Friday, September 25, 2026</strong>. Showcase floor open <strong>Friday & Saturday 10:00 PM – 1:00 AM</strong>.";
      }

      const diff = startTime - effectiveNow;
      setDigits(diff, daysEl, hoursEl, minsEl, secsEl);

      // Lock ballot submission
      if (submitBtn && !window.kremfestBypassLock) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.innerText = "🔒 Ballot Locked (Opens Friday Sept 25)";
      }
      if (lockNotice) lockNotice.style.display = "block";

    } else if (effectiveNow >= startTime && effectiveNow <= endTime) {
      // Phase 2: Live Open (Green)
      countdownBox.classList.add("state-open");
      if (badgeEl) badgeEl.innerHTML = "🟢 LIVE VOTING OPEN • CLOSES IN";
      if (subtextEl) {
        subtextEl.innerHTML = "Live voting active! Showcase Hours: <strong>Friday & Saturday 10:00 PM – 1:00 AM nightly</strong>. Cast your ballot before Sunday midnight!";
      }

      const diff = endTime - effectiveNow;
      setDigits(diff, daysEl, hoursEl, minsEl, secsEl);

      // Unlock ballot submission
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = "1";
        submitBtn.style.cursor = "pointer";
        submitBtn.innerText = "🚀 Submit My Vote";
      }
      if (lockNotice) lockNotice.style.display = "none";

    } else {
      // Phase 3: Closed (Red)
      countdownBox.classList.add("state-closed");
      if (badgeEl) badgeEl.innerHTML = "🔴 VOTING CLOSED";
      if (subtextEl) {
        subtextEl.innerHTML = "Audience Choice voting has officially closed for KremFest 2026. Thank you for participating!";
      }

      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minsEl) minsEl.innerText = "00";
      if (secsEl) secsEl.innerText = "00";

      // Lock ballot submission
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5";
        submitBtn.style.cursor = "not-allowed";
        submitBtn.innerText = "🔴 Voting Concluded";
      }
      if (lockNotice) {
        lockNotice.style.display = "block";
        lockNotice.innerHTML = "🔴 <strong>Voting is closed.</strong> Final tallies are being tabulated for the Viewer's Choice Award!";
      }
    }
  }

  function setDigits(diffMs, daysEl, hoursEl, minsEl, secsEl) {
    if (diffMs <= 0) {
      if (daysEl) daysEl.innerText = "00";
      if (hoursEl) hoursEl.innerText = "00";
      if (minsEl) minsEl.innerText = "00";
      if (secsEl) secsEl.innerText = "00";
      return;
    }

    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diffMs % (1000 * 60)) / 1000);

    if (daysEl) daysEl.innerText = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.innerText = String(hours).padStart(2, "0");
    if (minsEl) minsEl.innerText = String(mins).padStart(2, "0");
    if (secsEl) secsEl.innerText = String(secs).padStart(2, "0");
  }

  updateClock();
  setInterval(updateClock, 1000);
}

// Helper to switch simulation states in dev console or test bar
window.setVotingSimulation = function(state) {
  simulationState = state;
  console.log("Simulating voting state:", state);
};

/* --------------------------------------------------------------------------
   Audience Choice Voting Ballot Engine
   -------------------------------------------------------------------------- */
function initVoting() {
  const voteForm = document.getElementById("kremfest-vote-form");
  if (!voteForm) return;

  const year = voteForm.getAttribute("data-vote-year") || "2026";
  const storageKey = `kremfest_vote_${year}`;

  // Check if already voted
  const existingVote = localStorage.getItem(storageKey);
  const successBox = document.getElementById("vote-success-box");

  if (existingVote && successBox) {
    const parsed = JSON.parse(existingVote);
    showVoteSuccess(parsed);
  }

  // Radio item selection highlight
  const ballotItems = voteForm.querySelectorAll(".ballot-item");
  ballotItems.forEach((item) => {
    item.addEventListener("click", () => {
      ballotItems.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");
      const radio = item.querySelector("input[type='radio']");
      if (radio) radio.checked = true;
    });
  });

  voteForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selected = voteForm.querySelector("input[name='choice']:checked");
    if (!selected) {
      alert("Please select your favorite experience before submitting your ballot!");
      return;
    }

    const feedback = voteForm.querySelector("textarea[name='feedback']")?.value || "";
    const choiceTitle = selected.value;

    const ballotData = {
      choice: choiceTitle,
      feedback: feedback,
      timestamp: new Date().toISOString(),
      year: year,
    };

    localStorage.setItem(storageKey, JSON.stringify(ballotData));
    showVoteSuccess(ballotData);
  });
}

function showVoteSuccess(ballot) {
  const voteForm = document.getElementById("kremfest-vote-form");
  const successBox = document.getElementById("vote-success-box");
  const votedTitleEl = document.getElementById("voted-choice-title");

  if (voteForm) voteForm.style.display = "none";
  if (successBox) successBox.style.display = "block";
  if (votedTitleEl) votedTitleEl.textContent = ballot.choice;
}

function resetVote(year) {
  localStorage.removeItem(`kremfest_vote_${year}`);
  window.location.reload();
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

