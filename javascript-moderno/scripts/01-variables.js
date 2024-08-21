// ecmascript es12, es.next

// var, sigue existiendo
// let es la novedad, asi como const

var nombre = "nombre"; // ambito global, para todo el documento
console.log(nombre);

function mostrarNombre(){
    console.log(nombre);
}

mostrarNombre();

// let tiene unicamente ambito de bloque, se produce un ahorro de memoria
let pais = "españa";

console.log(pais);

function mostrarPais(){
    console.log(pais);
}

mostrarPais();

if(pais=="españa"){
    let continente = "europa";
}

// aqui el continente no seria accesible

// const constante