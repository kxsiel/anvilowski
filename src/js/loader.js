const body = document.querySelector("body");
const preloader = document.getElementById("preloader")

body.onload = function(){
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    setTimeout(() => {
        preloader.style.display = "none";
    }, 350);
}