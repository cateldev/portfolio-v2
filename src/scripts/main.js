//Menu Animation

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

//Header Background Change On Scroll

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Dynamic Greeting Code

const aniTextEng = document.getElementById("eng");
const timeNow = new Date().getHours();
let greetingEng =
  timeNow >= 5 && timeNow < 12
    ? "good morning"
    : timeNow >= 12 && timeNow < 18
    ? "good afternoon"
    : "good evening";
aniTextEng.innerHTML = `<div>${greetingEng}</div>`;

const aniTextPt = document.getElementById("pt");
let greetingPt =
  timeNow >= 5 && timeNow < 12
    ? "bom dia"
    : timeNow >= 12 && timeNow < 18
    ? "boa tarde"
    : "boa noite";
aniTextPt.innerHTML = `<div>${greetingPt}</div>`;

const aniTextEs = document.getElementById("es");
let greetingEs =
  timeNow >= 5 && timeNow < 12
    ? "buenos días"
    : timeNow >= 12 && timeNow < 18
    ? "buenas tardes"
    : "buenas noches";
aniTextEs.innerHTML = `<div>${greetingEs}</div>`;

const aniTextIt = document.getElementById("it");
let greetingIt =
  timeNow >= 5 && timeNow < 12
    ? "buongiorno"
    : timeNow >= 12 && timeNow < 18
    ? "buonasera"
    : "buona notte";
aniTextIt.innerHTML = `<div>${greetingIt}</div>`;

const aniTextDe = document.getElementById("de");
let greetingDe =
  timeNow >= 5 && timeNow < 12
    ? "guten morgen"
    : timeNow >= 12 && timeNow < 18
    ? "guten tag"
    : "guten nacht";
aniTextDe.innerHTML = `<div>${greetingDe}</div>`;
