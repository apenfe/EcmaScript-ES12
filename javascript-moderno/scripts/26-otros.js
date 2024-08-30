// separadores numericos
let numero = 40_000_000;

console.log(numero);

// replace
let frase = "voy en mi moto contento por la carretera";
frase = frase.replace("moto", "tenerè")
console.log(frase);

// replaceall
frase = "voy en mi moto contento por la carretera sin ver mas moto";
frase = frase.replaceAll("moto", "coche")
console.log(frase);

// asignadores logicos
let nombre;
let id = 23;

nombre ||= id;
console.log(nombre);
