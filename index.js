const close_btn = document.querySelector(".close-btn");
const bars = document.querySelector(".bars");
const navItems = document.querySelector(".sidenav_items");
bars.addEventListener("click", () => {
    navItems.style.width = "100%";
})
close_btn.addEventListener("click", () => {
    navItems.style.width = "0%";
})
console.log(window.innerWidth);