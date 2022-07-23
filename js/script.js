const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-icon");
menu.addEventListener("click", function(){
    if(navbar.classList.contains("show")){
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
});