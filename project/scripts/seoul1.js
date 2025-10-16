const currentyear = document.querySelector("#currentyear");
const today = new Date();

currentyear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

let lastModified = new Date(document.lastModified);

let formatted = lastModified.toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
});

document.getElementById("lastModified").textContent = formatted;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const header = document.querySelector('header')

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
document.querySelector("main").style.display = "block";
