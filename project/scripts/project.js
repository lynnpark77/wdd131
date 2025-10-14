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

const courses = [
    {
        name: "Seoul Must Do Tour",
        location: "Seoul",
        imageURL: "images/destination1.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=251"
    },
    {
        name: "Palaces & Hanok Tour",
        location: "Seoul",
        imageURL: "images/destination2.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565465"
    },
    {
        name: "Bukchon Food Tour",
        location: "Seoul",
        imageURL: "images/destination3.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565466"
    },
    {
        name: "Haeundae Beach Tour",
        location: "Busan",
        imageURL: "images/destination4.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565488"
    },
    {
        name: "Busan Hotspot Tour",
        location: "Busan",
        imageURL: "images/destination5.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565469"

    },
    {
        name: "Busan Coastal Food Tour",
        location: "Busan",
        imageURL: "images/destination6.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565495"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const tourSelect = document.getElementById("course");

    courses.forEach(course => {
        const option = document.createElement("option");

        option.value = course.name;
        option.textContent = course.name;

        tourSelect.appendChild(option);
    })
});

const exploreLink = document.getElementById("exploreBtn");
const selectCourse = document.getElementById("course");

selectCourse.addEventListener("change", () => {
    const selected = courses.find(c => c.name === selectCourse.value);
    if (selected) {
        exploreLink.href = selected.URL;
        exploreLink.target = "_blank";
    } else {
        exploreLink.href = "#";
    }
});






