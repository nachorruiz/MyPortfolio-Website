//LETRAS DINAMICAS // TYPING EFFECT
const dynamicText = document.querySelector("h2 span");
const words = ["Desarrollador Web Junior", "Asociado en Ciberseguridad", "Estudiante de Ing. en Sistemas"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length){

        charIndex++;
        setTimeout(typeEffect, 200);
    } else if(isDeleting && charIndex > 0){

        charIndex--;
        setTimeout(typeEffect, 100);
    } else{
        isDeleting = !isDeleting
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

//DISPLAY DE IMAGEN ON CLICK
document.querySelectorAll(".accordion-img").forEach(image =>{
    image.onclick = () =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }
});

document.querySelector(".popup-image span").onclick = () =>{
    document.querySelector(".popup-image").style.display = "none";
}

//NAVBAR CHANGE ON SCROLL

function myFunction(x){
    if(x.matches){
        window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
        })
    }
    else{
        window.addEventListener("scroll", function(){
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY < 0);
        })
    }
}

var x = window.matchMedia("(min-width: 992px)")

myFunction(x);

x.addEventListener("change", function(){
    myFunction(x);
});

/*
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})*/