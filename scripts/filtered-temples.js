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
    header.classList.toggle('hide-title');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:"images/temples/aba-nigeria-temple.webp"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:"images/temples/manti-temple.webp"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/temples/payson-utah-temple.webp"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:"images/temples/yigo_guam_temple.webp"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:"images/temples/washington_dc_temple.webp"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:"images/temples/lima-peru-temple.webp"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:"images/temples/mexico-city-temple.webp"
    },
    {
        templeName: "Seoul South Korea",
        location: "Seoul, South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl:"images/temples/seoul_korea_temple.webp"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 47224,
        imageUrl:"images/temples/laie-temple.webp"      
    },

];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldTemples = document.querySelector("#oldtemples");
const newTemples = document.querySelector("#newtemples");
const largeTemples = document.querySelector("#largetemples");
const smallTemples = document.querySelector("#smalltemples");

homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples);
});

oldTemples.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});

newTemples.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

largeTemples.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

smallTemples.addEventListener("click", (e) => {
    e.preventDefault();
    createTempleCard(temples.filter(temple => temple.area < 10000));
});
 
function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class ="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class = "label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class = "label">Size:</span> ${temple.area}sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName}Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
}