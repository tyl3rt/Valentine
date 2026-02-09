// Personalize here
const HER_NAME = "Her Name"; // <-- change this

const MOMENTS = [
  "The first time you ___ and I couldn’t stop smiling.",
  "When we ___ and it felt like our own little world.",
  "Your laugh when ___ (I replay it in my head).",
  "That time you ___ and I thought: wow, I adore you.",
  "Every ordinary moment that becomes magic because it’s with you."
];

document.getElementById("name").textContent = HER_NAME;
document.getElementById("m1").textContent = MOMENTS[0];
document.getElementById("m2").textContent = MOMENTS[1];
document.getElementById("m3").textContent = MOMENTS[2];
document.getElementById("m4").textContent = MOMENTS[3];
document.getElementById("m5").textContent = MOMENTS[4];

// Tap-to-reveal for mobile (also works with keyboard focus)
const secretBox = document.getElementById("secretBox");
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
