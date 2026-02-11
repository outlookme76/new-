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
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* Start */
startBtn.onclick = () => {
  const name = document.getElementById("nameInput").value || "My Love";
  showScreen("proposal");
  proposalText.innerText = `Will you be my Valentine, ${name}? 💖`;

  music.volume = 0;
  music.play();

  let vol = 0;
  const fade = setInterval(()=>{
    if(vol < 1){
      vol += 0.05;
      music.volume = vol;
    } else clearInterval(fade);
  },200);
};

/* Mute */
muteBtn.onclick = () => {
  music.muted = !music.muted;
  muteBtn.innerText = music.muted ? "🔇" : "🔊";
};

/* Playful No */
let noCount = 0;
noBtn.onmouseover = () => {
  noCount++;
  if(noCount === 1) noBtn.innerText = "Are you sure? 🥺";
  else if(noCount === 2) noBtn.innerText = "Please? 🥹";
  else if(noCount === 3) noBtn.style.display = "none";
};

/* Real Images */
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

yesBtn.onclick = () => {
  showScreen("slideshow");
  launchConfetti();
  showSlides();
};

function showSlides(){
  if(index < photos.length){
    slideImage.src = photos[index].src;
    slideCaption.innerText = photos[index].caption;
    index++;
    setTimeout(showSlides,2500);
  } else {
    showScreen("ringSection");
    setTimeout(()=> showScreen("finalPage"),6000);
  }
}

/* Confetti */
function launchConfetti(){
  const canvas=document.getElementById("confetti");
  const ctx=canvas.getContext("2d");
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  let pieces=[];
  for(let i=0;i<150;i++){
    pieces.push({
      x:Math.random()*canvas.width,
      y:Math.random()*canvas.height,
      r:Math.random()*6+4
    });
  }
  setInterval(()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="white";
    pieces.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
      p.y+=2;
      if(p.y>canvas.height)p.y=0;
    });
  },20);
}
