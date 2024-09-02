// comprobar si el navegador es compatible

if (typeof (Storage) !== "undefined") {
    console.log('local storage disponible');
} else {
    console.log('local storage no disponible');
}

// guardar los datos ene el navegador
sessionStorage.setItem("nombre1", "adrian peñalver");
sessionStorage.setItem("nombre2", "lorenzo");

// recuperar dayos almacenados
alert(sessionStorage.getItem("nombre1"));

// borrar datos
sessionStorage.removeItem("nombre2");