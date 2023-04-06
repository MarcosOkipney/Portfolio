let menu = document.querySelector(".menu");
let nav = document.querySelector(".navlinks");
let links = document.querySelector(".navlinks li");
menu.addEventListener ("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})


var typed = new Typed (".input", {
    strings: ["Frontend Developer", "Web Developer"], 
    typedSpeed:70,
    backSpeed:55,
    loop:true
})