let boton = document.querySelector("#btnCambiarColor");
let luces = document.querySelectorAll(".luz");
let indice = 1;

boton.addEventListener("click", () => {
    luces.forEach(luz => luz.classList.remove("activa"))
    
    luces[indice].classList.add("activa");
    indice++

    if (indice > 2) {
        indice = 0;
    }
});