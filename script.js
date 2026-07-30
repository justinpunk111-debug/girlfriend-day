// ===========================
// ELEMENTS
// ===========================

const passwordPage = document.getElementById("passwordPage");

const passwordInput = document.getElementById("passwordInput");

const unlockBtn = document.getElementById("unlockBtn");

const wrongPassword = document.getElementById("wrongPassword");

const pages = document.querySelectorAll(".page");

const intro = document.getElementById("intro");
const scanner = document.getElementById("scanner");
const gallery = document.getElementById("gallery");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("final");

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("next");

const music = document.getElementById("music");

const progressBar = document.getElementById("progressBar");
const scanText = document.getElementById("scanText");

const photo = document.getElementById("photo");
const typing = document.getElementById("typing");

// ===========================
// PAGE SWITCH
// ===========================

function showPage(page){

pages.forEach(p=>p.classList.remove("active"));

page.classList.add("active");

}

// ===========================
// START BUTTON
// ===========================

const music = document.getElementById("music");

startBtn.addEventListener("click", () => {

    music.volume = 0.4; // 40% volume
    music.play().catch(err => console.log(err));

    showPage(scanner);

    startScanner();

});

// ===========================
// SOULMATE SCANNER
// ===========================

const scanMessages=[

"Connecting to the Universe...",

"Finding your soulmate...",

"Matching heartbeats...",

"Reading memories...",

"Checking compatibility...",

"Soulmate Found ❤️"

];

let progress=0;

let msg=0;

function startScanner(){

const interval=setInterval(()=>{

progress++;

progressBar.style.width=progress+"%";

if(progress%18===0 && msg<scanMessages.length){

scanText.innerHTML=scanMessages[msg];

msg++;

}

if(progress>=100){

clearInterval(interval);

setTimeout(()=>{

showPage(passwordPage);
    
const PASSWORD = "13178";

unlockBtn.addEventListener("click",()=>{

if(passwordInput.value.toLowerCase()===PASSWORD){

    wrongPassword.innerHTML="";

    unlockBtn.innerHTML="Unlocked ❤️";

    setTimeout(()=>{

        showPage(gallery);

        startSlideshow();

    },800);

}
else{

    wrongPassword.innerHTML="Wrong Password ❤️";

    passwordInput.classList.add("shake");

    setTimeout(()=>{

        passwordInput.classList.remove("shake");

    },400);

}

});
},1200);

}

},60);

}

// ===========================
// PHOTO SLIDESHOW
// ===========================

const photos=[

"photo1.jpg",

"photo2.jpg",

"photo3.jpg",

"photo4.jpg",

"photo5.jpg"

];

let currentPhoto=0;

function startSlideshow(){

photo.src=photos[0];

const slide=setInterval(()=>{

currentPhoto++;

photo.style.opacity=0;

setTimeout(()=>{

photo.src=photos[currentPhoto];

photo.style.opacity=1;

},400);

if(currentPhoto>=photos.length-1){

clearInterval(slide);

setTimeout(()=>{

showPage(letterPage);

typeLetter();

},2500);

}

},3000);

}

// ===========================
// FLOATING HEARTS
// ===========================

const hearts=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animationDuration=(6+Math.random()*5)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,500);

// =====================================
// TYPEWRITER LOVE LETTER
// =====================================

const message = `My Dearest Reesha ❤️

Happy Girlfriend's Day!

Out of billions of people,
life gave me the most beautiful soul.

Thank you for every smile,
every laugh,
every late-night conversation,
and every beautiful memory.

You are my peace,
my happiness,
my favourite notification,
and my safest place.

No matter where life takes us,
I promise to stand beside you,
to support you,
to love you,
and to choose you...

Every.
Single.
Day.

I love you more than words can express.

Forever Yours,

Piyush ❤️`;

let charIndex = 0;

function typeLetter(){

typing.innerHTML = "";

charIndex = 0;

type();

}

function type(){

if(charIndex < message.length){

typing.innerHTML += message.charAt(charIndex);

charIndex++;

setTimeout(type,35);

}
else{

nextBtn.style.display="block";

}

}

// =====================================
// NEXT BUTTON
// =====================================

nextBtn.addEventListener("click",()=>{

showPage(finalPage);

startFinalSlideshow();

launchFireworks();

});

// =====================================
// FINAL PHOTO SLIDESHOW
// =====================================

const bg=document.getElementById("bgImage");

let bgIndex=0;

function startFinalSlideshow(){

bg.src=photos[0];

setInterval(()=>{

bg.style.opacity=0;

setTimeout(()=>{

bgIndex++;

if(bgIndex>=photos.length){

bgIndex=0;

}

bg.src=photos[bgIndex];

bg.style.opacity=1;

},500);

},4000);

}

// =====================================
// SHOOTING STARS
// =====================================

const stars=document.getElementById("stars");

function shootingStar(){

const star=document.createElement("div");

star.style.position="absolute";

star.style.width="3px";

star.style.height="3px";

star.style.background="white";

star.style.boxShadow="0 0 15px white";

star.style.left=Math.random()*window.innerWidth+"px";

star.style.top="-20px";

star.style.transform="rotate(45deg)";

star.style.zIndex="0";

star.style.transition="2s linear";

stars.appendChild(star);

setTimeout(()=>{

star.style.left=(parseInt(star.style.left)+300)+"px";

star.style.top=(window.innerHeight+100)+"px";

star.style.opacity="0";

},100);

setTimeout(()=>{

star.remove();

},2200);

}

setInterval(shootingStar,3500);

// =====================================
// HEART PULSE
// =====================================

setInterval(()=>{

document.body.animate([

{transform:"scale(1)"},

{transform:"scale(1.003)"},

{transform:"scale(1)"}

],{

duration:800

});

},4000);

// =========================================
// FIREWORKS
// =========================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles = [];

function randomColor() {
    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#ffffff",
        "#ff85a1",
        "#c77dff"
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

function firework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    for (let i = 0; i < 80; i++) {

        particles.push({

            x,
            y,

            radius: Math.random() * 3 + 1,

            color: randomColor(),

            speedX: (Math.random() - 0.5) * 8,

            speedY: (Math.random() - 0.5) * 8,

            life: 100

        });

    }

}

function animateFireworks() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p,index)=>{

        ctx.beginPath();

        ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

        ctx.fillStyle=p.color;

        ctx.fill();

        p.x+=p.speedX;

        p.y+=p.speedY;

        p.life--;

        p.radius*=0.985;

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

function launchFireworks(){

    firework();

    setInterval(firework,1200);

}

// =========================================
// ROSE PETALS
// =========================================

function createPetal(){

    const petal=document.createElement("div");

    petal.innerHTML="🌹";

    petal.style.position="fixed";

    petal.style.left=Math.random()*100+"vw";

    petal.style.top="-50px";

    petal.style.fontSize=(20+Math.random()*18)+"px";

    petal.style.pointerEvents="none";

    petal.style.zIndex="999";

    petal.style.transition="linear";

    petal.style.transitionDuration=(6+Math.random()*5)+"s";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.style.top="110vh";

        petal.style.transform="rotate(720deg)";

        petal.style.left=(Math.random()*100)+"vw";

    },50);

    setTimeout(()=>{

        petal.remove();

    },11000);

}

setInterval(createPetal,700);

// =========================================
// SPARKLES
// =========================================

document.addEventListener("touchmove", sparkle);
document.addEventListener("mousemove", sparkle);

function sparkle(e){

    const s=document.createElement("div");

    s.innerHTML="✨";

    s.style.position="fixed";

    s.style.left=(e.clientX || e.touches?.[0]?.clientX)+"px";

    s.style.top=(e.clientY || e.touches?.[0]?.clientY)+"px";

    s.style.pointerEvents="none";

    s.style.fontSize="18px";

    s.style.zIndex="9999";

    document.body.appendChild(s);

    s.animate([

        {transform:"translateY(0)",opacity:1},

        {transform:"translateY(-40px)",opacity:0}

    ],{

        duration:1000

    });

    setTimeout(()=>{

        s.remove();

    },1000);

}

// =========================================
// ENDING MESSAGE
// =========================================

setTimeout(()=>{

    console.log("Happy Girlfriend's Day ❤️");

},1000);
