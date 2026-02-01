const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("closeBtn");

document.addEventListener("click", (e) => {
  const img = e.target.closest(".pic");
  if (!img) return;

  modalImg.src = img.src;
  modalImg.alt = img.alt;
  modal.classList.add("open");
});

function closeModal() {
  modal.classList.remove("open");
  modalImg.src = "";
}

backdrop.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});