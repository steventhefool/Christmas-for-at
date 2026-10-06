const gift = document.getElementById("gift");
const openGift = document.getElementById("openGift");
const backTop = document.getElementById("backTop");
const video = document.getElementById("video");
const videoPlaceholder = document.getElementById("videoPlaceholder");

function openPresent() {
  gift.classList.add("open");
  setTimeout(() => {
    document.querySelector(".letter-section").scrollIntoView({ behavior: "smooth" });
  }, 650);
}

openGift.addEventListener("click", openPresent);
gift.addEventListener("click", openPresent);
gift.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") openPresent();
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

video.addEventListener("loadeddata", () => {
  videoPlaceholder.style.display = "none";
});

video.addEventListener("error", () => {
  video.style.display = "none";
  videoPlaceholder.style.display = "flex";
});

// Floating hearts / sparkles
const symbols = ["♡", "✦", "·", "♥"];
const particles = document.getElementById("particles");

function createParticle() {
  const el = document.createElement("span");
  el.className = "particle";
  el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  el.style.left = Math.random() * 100 + "vw";
  el.style.fontSize = (9 + Math.random() * 15) + "px";
  el.style.animationDuration = (7 + Math.random() * 7) + "s";
  el.style.animationDelay = (Math.random() * 1.5) + "s";
  particles.appendChild(el);

  setTimeout(() => el.remove(), 16000);
}

setInterval(createParticle, 900);
for (let i = 0; i < 7; i++) setTimeout(createParticle, i * 250);
