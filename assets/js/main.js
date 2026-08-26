/**
 * KremFest XR — Client-Side Interactive Engine
 * Handles project detail modals, audience choice voting, search filtering, and QR code popups.
 */

document.addEventListener("DOMContentLoaded", () => {
  initModals();
  initVoting();
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
