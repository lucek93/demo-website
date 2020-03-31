const burger = document.querySelector(".nav-mobile .burger");

const iconBurger = document.querySelector(".burger .fa-bars");
const iconX = document.querySelector(".burger .fa-times");
const column = document.querySelector("aside");

burger.addEventListener('click', function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");
})