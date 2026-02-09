// SECRET REVEAL (index.html)
const secretBox = document.getElementById("secretBox");
if (secretBox) {
  secretBox.addEventListener("click", () => {
    secretBox.classList.toggle("revealed");
    secretBox.setAttribute("aria-pressed", secretBox.classList.contains("revealed"));
  });

  secretBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      secretBox.click();
    }
  });
}

// MEMORY MODAL (memories.html)
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalText = document.getElementById("modalText");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");

function openModal({ title, img, text }) {
  modalTitle.textContent = title;
  modalImg.src = img;
  modalImg.alt = title;
  modalText.textContent = text;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

const memoryCards = document.querySelectorAll(".memory-card");
if (memoryCards.length && modal) {
  memoryCards.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal({
        title: btn.dataset.title,
        img: btn.dataset.img,
        text: btn.dataset.text,
      });
    });
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

