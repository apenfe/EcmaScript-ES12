window.addEventListener("DOMContentLoaded", (e) => {

    let contenedor = document.querySelector("#contendor");
    let containers = document.querySelectorAll(".container");

    contenedor.innerHTML = "Hola soy un contendor";

    containers.forEach(container => {
        container.innerText = "hola"
    })

});