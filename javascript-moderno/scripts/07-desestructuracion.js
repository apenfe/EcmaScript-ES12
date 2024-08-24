let frutas = ["manzana", "pera", "naranja"];

// con array
let [manzana, pera, naranja] = frutas;

console.log(naranja);

// con objetos
let persona = {
    nombre: "adrian",
    edad: 30,
    altura: 180,
    pais: "España"
};

let {nombre, edad, altura, pais} = persona;
console.log(edad);

// con string
let usuario = "adrian peñalver murcia";
let [name, apellido, ciudad] = usuario.split(" ");

// crear varias variables
let lenguaje = "css",
    framework = "bootstrap",
    preprocesador = "saas";