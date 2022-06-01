var x = document.getElementById("icon");

if (localStorage.getItem('theme') == null) {

    localStorage.setItem('theme', 'light');
}

const localData = localStorage.getItem('theme');
if (localData == 'light') {
    x.src = "images/sun.webp";
    document.body.classList.remove("dark-theme");
} else if (localData == 'dark') {
    x.src = "images/moon.webp";
    document.body.classList.add("dark-theme");
}

x.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        x.src = "images/sun.webp";
        localStorage.setItem('theme', 'dark');
    } else {
        x.src = "images/moon.webp";
        localStorage.setItem('theme', 'light');
    }
};

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

burger.onclick = function () {
    nav.classList.toggle("nav-active");
};