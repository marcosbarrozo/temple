const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-icon");
const closeBtn = document.querySelector("#close-btn");
menu.addEventListener("click", function(){
    if(navbar.classList.contains("show")){
        navbar.classList.remove("show");
    } else {
        navbar.classList.add("show");
    }
});

closeBtn.addEventListener("click", function(){
    if(navbar.classList.contains("show")){
        navbar.classList.remove("show");
    }
});

const last_updated = document.querySelector(".last_updated");
last_updated.textContent = document.lastModified;