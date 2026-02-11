const screens = document.querySelectorAll(".screen");
const startBtn = document.getElementById("startBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const proposalText = document.getElementById("proposalText");
const slideImage = document.getElementById("slideImage");
const slideCaption = document.getElementById("slideCaption");
const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

function showScreen(id){
  screens.forEach(screen => {
    screen.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

/* Start Button */
startBtn.addEventListener("click", () => {
  const name = document.getElementById("nameInput").value || "My Love";

  showScreen("proposal");
  proposalText.textContent = `Will you be my Valentine, ${name}? 💖`;

  music.play().catch(() => {});
});

/* Mute */
muteBtn.addEventListener("click", () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
});

/* Playful No */
let noCount = 0;
noBtn.addEventListener("mouseover", () => {
  noCount++;
  if(noCount === 1) noBtn.textContent = "Are you sure? 🥺";
  else if(noCount === 2) noBtn.textContent = "Please? 🥹";
  else if(noCount === 3) noBtn.style.display = "none";
});

/* Slideshow */
const photos = [
  {src:"images/1.jpg",caption:"Our beautiful beginning 💕"},
  {src:"images/2.jpg",caption:"Moments I cherish 🥰"},
  {src:"images/3.jpg",caption:"Your smile is my happiness 😍"},
  {src:"images/4.jpg",caption:"Every second with you matters 💖"},
  {src:"images/5.jpg",caption:"Forever feels right with you 💍"},
  {src:"images/6.jpg",caption:"My favorite person 🌎"},
  {src:"images/7.jpg",caption:"This is just the beginning ✨"}
];

let index = 0;

yesBtn.addEventListener("click", () => {
  index = 0;
  showScreen("slideshow");
  showSlides();
});

function showSlides(){
  if(index >= photos.length){
    showScreen("ringSection");

    setTimeout(() => {
      showScreen("finalPage");
    }, 5000);

    return;
  }

  slideImage.src = photos[index].src;
  slideCaption.textContent = photos[index].caption;

  index++;
  setTimeout(showSlides, 2500);
}
