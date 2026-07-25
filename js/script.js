const body = document.body;

const button = document.getElementById("themeButton");

button.onclick = () => {

body.classList.toggle("light");

if(body.classList.contains("light")){

button.innerHTML="🌞 Light Mode";

}else{

button.innerHTML="🌙 Moon Mode";

}

}

const stars=document.getElementById("stars");

for(let i=0;i<150;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.animationDelay=Math.random()*5+"s";

stars.appendChild(star);

}

// Fade in page
document.body.style.opacity=0;

window.onload=()=>{

document.body.style.opacity=1;

};

// Scroll animation
const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{opacity:0,transform:"translateY(40px)"},

{opacity:1,transform:"translateY(0px)"}

],{

duration:800,
fill:"forwards"

});

}

});

});

document.querySelectorAll(".card,.profile").forEach(el=>observer.observe(el));
