let barIcon = document.querySelector(".bar");
let navLinks = document.querySelector(".navbar .links");
barIcon.onclick = function() {
    navLinks.classList.toggle("active");
}