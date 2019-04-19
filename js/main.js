var navToggle = document.querySelector("#navToggle");
var overlay = document.querySelector(".overlay");
var body = document.querySelector("body");

navToggle.addEventListener('click', function() {
    navToggle.classList.toggle("active");
    overlay.classList.toggle("open");
    // this line ▼ prevents content scroll-behind
    body.classList.toggle("locked"); 
});