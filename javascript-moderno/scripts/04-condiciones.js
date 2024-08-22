// operador ternario

let persona = ["adrian",23];

let mayorEdad = (persona[1] >= 18) ? "mayor de edad" : "menor de edad";

console.log(mayorEdad);


// diferencia entre == ===   != !==

let edad1 = 80;
let edad2 = "80";

if(edad1 == edad2){
    console.log("misma edad");
}else{
    console.log("edades distintas");
}

if(edad1 === edad2){
    console.log("misma edad");
}else{
    console.log("edades distintas");
}