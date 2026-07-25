// Theme Toggle

const body = document.body;
const button = document.getElementById("themeButton");
const icon = document.getElementById("themeIcon");

// Remember theme
if(localStorage.getItem("theme") === "light"){
    body.classList.add("light");
    icon.src = "images/sun.png";
}else{
    icon.src = "images/moon.png";
}

button.addEventListener("click", () => {

    // Fade icon out
    icon.style.opacity = "0";
    icon.style.transform = "scale(.8)";

    setTimeout(() => {

        body.classList.toggle("light");

        if(body.classList.contains("light")){
            icon.src = "images/sun.png";
            localStorage.setItem("theme","light");
        }else{
            icon.src = "images/moon.png";
            localStorage.setItem("theme","dark");
        }

        icon.style.opacity = "1";
        icon.style.transform = "scale(1)";

    },200);

});


// ---------------------------
// Animated Star Background
// ---------------------------

const stars = document.getElementById("stars");

for(let i=0;i<220;i++){

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random()*2+1;

    star.style.width = size+"px";
    star.style.height = size+"px";

    star.style.left = Math.random()*100+"%";
    star.style.top = Math.random()*100+"%";

    star.style.opacity = Math.random();

    star.style.animationDelay = Math.random()*4+"s";

    stars.appendChild(star);

}


// ---------------------------
// Fade Page In
// ---------------------------

document.body.style.opacity="0";

window.addEventListener("load",()=>{

    document.body.style.transition="opacity .8s ease";
    document.body.style.opacity="1";

});


// ---------------------------
// Floating Header Image
// ---------------------------

const image = document.querySelector(".profile");

let direction = 1;
let amount = 0;

setInterval(()=>{

    amount += direction;

    image.style.transform = `translateY(${amount}px)`;

    if(amount >= 8) direction = -1;
    if(amount <= -8) direction = 1;

},60);


// ---------------------------
// Smooth Scroll Effect
// ---------------------------

window.addEventListener("scroll",()=>{

    const y = window.scrollY;

    stars.style.transform = `translateY(${y*0.15}px)`;

});


// ---------------------------
// Navbar Background
// ---------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        nav.style.background="rgba(0,0,0,.55)";
        nav.style.backdropFilter="blur(12px)";

        if(body.classList.contains("light")){
            nav.style.background="rgba(255,255,255,.75)";
        }

    }else{

        nav.style.background="transparent";

    }

});
