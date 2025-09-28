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
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Seoul South Korea",
        location: "Seoul, South Korea",
        dedicated: "1985,December, 14",
        area: 28057,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/400x640/seoul-korea-temple-lds-417894-wallpaper.jpg"
    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 47224,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/400x250/laie-temple-775370-wallpaper.jpg"       
    },
    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska",
        dedicated: "1999, January, 9",
        area: 11937,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/9591632feb8a8e4221de920d9bf78b23b950a5e0/full/500%2C/0/default"
    }
];

createTempleCard();

function createTempleCard() {
    temples.foreach((temple) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textcontent = temple.templeName;
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