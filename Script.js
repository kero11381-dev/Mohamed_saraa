// ===== الرسالة =====

const message = `Every love story is beautiful,

but ours is my favorite ❤️

Thank you for every smile,

every laugh,

every memory,

and every moment together.

You are my happiness,

my safe place,

and the best thing that ever happened to me.

I love you forever ❤️

Mohamed ❤️ Sara`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        document.getElementById("typing").innerHTML = message.substring(0, i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

typeWriter();


// ===== عداد العلاقة =====
// غيّر التاريخ ده لتاريخ بداية ارتباطكم

const startDate = new Date(2025, 10, 19, 0, 0, 0);

function updateCounter() {

    const now = new Date();

    let diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff %= (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff %= (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));

    diff %= (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);
// ===== شاشة البداية =====

const intro = document.getElementById("intro");

intro.addEventListener("click", () => {

    intro.classList.add("hide");

    const audio = document.querySelector("audio");

    if(audio){
        audio.play().catch(()=>{});
    }

    startHearts();

});

// ===== القلوب =====

function startHearts(){

    const container = document.getElementById("hearts");

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(16+Math.random()*18)+"px";

        heart.style.animationDuration=(5+Math.random()*3)+"s";

        container.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },8000);

    },300);

}