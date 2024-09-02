// comprobar si el navegador es compatible

if (typeof (Storage) !== "undefined") {
    console.log('local storage disponible');
} else {
    console.log('local storage no disponible');
}

// guardar los datos ene el navegador
localStorage.setItem("nombre1", "adrian peñalver");
localStorage.setItem("nombre2", "lorenzo");

// recuperar dayos almacenados
document.write(localStorage.getItem("nombre"));

// borrar datos
localStorage.removeItem("nombre2");