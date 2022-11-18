console.log("Cześć")

let button = document.querySelector(".themeButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark")

    themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny"
});


let contactButton = document.querySelector(".contactButton")
let contactText = document.querySelector(".contactText")

contactButton.addEventListener("click", () => {
    contactButton.replaceWith("Zabrze , telefon: 698626634")
});


