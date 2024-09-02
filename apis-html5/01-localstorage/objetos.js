let miObjeto = {
    nombre: "adrian",
    sitio: "apenfe.es"
}

localStorage.setItem("persona", JSON.stringify(miObjeto));

console.log(JSON.parse(localStorage.getItem("persona")));
