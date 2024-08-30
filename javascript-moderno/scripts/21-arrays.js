// buscar en un array 

let personas = ["adrian", "paco", "juan", "antonio"];

let busqueda = personas.find(persona => {
    return persona == "antonio";
})

console.log(busqueda);

// find index
busqueda = personas.findIndex(persona => {
    return persona == "antonio";
})

console.log(busqueda);

// crear array basandome en un objeto iterable
let arrayLetras = Array.from("apenfe.es");
console.log(arrayLetras);

let arrayNumerosCuadrado = Array.from([1, 2, 3, 4, 5, 6], numero => numero * numero);
console.log(arrayNumerosCuadrado);

// comprobar si existe un elemento en el array
console.log(personas.includes("adrian"));

// filtrar arrays
let nuevasPersonas = personas.filter(persona => persona.length >= 5);
console.log(nuevasPersonas);

