const intro=document.getElementById("intro");
const proposal=document.getElementById("proposal");
const slideshow=document.getElementById("slideshow");
const ringSection=document.getElementById("ringSection");
const finalPage=document.getElementById("finalPage");

const nameInput=document.getElementById("nameInput");
const startBtn=document.getElementById("startBtn");
const proposalText=document.getElementById("proposalText");

const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");

const slideImage=document.getElementById("slideImage");
const slideCaption=document.getElementById("slideCaption");
const progress=document.getElementById("progress");

const finalMessage=document.getElementById("finalMessage");
const music=document.getElementById("bgMusic");

/* Floating Hearts */
setInterval(()=>{
  const heart=document.createElement("div");
  heart.classList.add("heart");
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(3+Math.random()*3)+"s";
  document.body.appendChild(heart);
  setTimeout(()=>heart.remove(),6000);
},300);

/* Name */
startBtn.onclick=()=>{
  const name=nameInput.value || "My Love";
  intro.classList.add("hidden");
  proposal.classList.remove("hidden");
  typeWriter(`Will you be my Valentine, ${name}? 💖`);
};

function typeWriter(text){
  let i=0;
  proposalText.innerHTML="";
  function typing(){
    if(i<text.length){
      proposalText.innerHTML+=text.charAt(i);
      i++;
      setTimeout(typing,50);
    }
  }
  typing();
}

/* Real Photos */
const photos=[
  {src:"images/1.jpg",caption:"Our beautiful beginning 💕"},
  {src:"images/2.jpg",caption:"Moments I cherish 🥰"},
  {src:"images/3.jpg",caption:"Your smile is my happiness 😍"},
  {src:"images/4.jpg",caption:"Every second with you matters 💖"},
  {src:"images/5.jpg",caption:"Forever feels right with you 💍"},
  {src:"images/6.jpg",caption:"My favorite person in the world 🌎"},
  {src:"images/7.jpg",caption:"This is just the beginning ✨"}
];

let index=0;

yesBtn.onclick=()=>{
  music.play();
  proposal.classList.add("hidden");
  slideshow.classList.remove("hidden");
  launchConfetti();
  showSlides();
};

function showSlides(){
  if(index<photos.length){
    slideImage.src=photos[index].src;
    slideCaption.innerText=photos[index].caption;
    progress.style.width=((index+1)/photos.length)*100+"%";
    index++;
    setTimeout(showSlides,2500);
  }else{
    slideshow.classList.add("hidden");
    ringSection.classList.remove("hidden");
    setTimeout(()=>{
      ringSection.classList.add("hidden");
      finalPage.classList.remove("hidden");
      finalMessage.innerText="I promise to love you endlessly 💖";
    },6000);
  }
}

/* Playful No */
let noCount=0;
noBtn.addEventListener("mouseover",()=>{
  noCount++;
  if(noCount===1) noBtn.innerText="Are you sure? 🥺";
  else if(noCount===2) noBtn.innerText="Please? 🥹";
  else if(noCount===3) noBtn.style.display="none";
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*80+"%";
  noBtn.style.top=Math.random()*80+"%";
  yesBtn.style.transform=`scale(${1+noCount*0.1})`;
});

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
