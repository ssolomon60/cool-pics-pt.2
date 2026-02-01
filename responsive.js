const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(navLinks.classList.contains("open")));
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("closeBtn");

function openModal(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt || "";
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  modalImg.alt = "";
}

document.addEventListener("click", (e) => {
  const img = e.target.closest(".pic");
  if (!img) return;
  openModal(img.dataset.full || img.src, img.alt);
});

backdrop.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});