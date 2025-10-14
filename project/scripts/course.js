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

const courses = [
    {
        name: "Seoul Must Do Tour",
        location: "Seoul",
        imageUrl: "images/destination1.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=251"
    },
    {
        name: "Palaces & Hanok Tour",
        location: "Seoul",
        imageUrl: "images/destination2.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565465"
    },
    {
        name: "Bukchon Food Tour",
        location: "Seoul",
        imageUrl: "images/destination3.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565466"
    },
    {
        name: "Haeundae Beach Tour",
        location: "Busan",
        imageUrl: "images/destination4.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565488"
    },
    {
        name: "Busan Hotspot Tour",
        location: "Busan",
        imageUrl: "images/destination5.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565469"

    },
    {
        name: "Busan Coastal Food Tour",
        location: "Busan",
        imageUrl: "images/destination6.webp",
        URL: "https://english.visitkorea.or.kr/svc/whereToGo/hdrdslt/hdrdsltView.do?crsSn=565495"
    }
];


createCourseCard(courses);

const destinationSelect = document.querySelector("#destination");

destinationSelect.addEventListener("change", () => {
    const selected = destinationSelect.value;

    let filteredCourses;
    if (selected === "all") {
        createCourseCard(courses);
    } else {
        const filteredCourses = courses.filter(course => course.location === selected);
        createCourseCard(filteredCourses);
    }
});

function createCourseCard(filteredCourses) {
    document.querySelector(".container").innerHTML = "";
    filteredCourses.forEach(course => {
        let card = document.createElement("section");
        let img = document.createElement("img");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let link = document.createElement("a");

        img.setAttribute("src", course.imageUrl);
        img.setAttribute("alt", `${course.name}`);
        img.setAttribute("loading", "lazy");
        name.textContent = course.name;
        location.innerHTML = `<span class = "label">Location:</span> ${course.location}`;
        link.setAttribute("href", `${course.URL}`);
        link.textContent = "View Details";
        link.classList.add("btn");
       

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(link);

        document.querySelector(".container").appendChild(card);

    });
}