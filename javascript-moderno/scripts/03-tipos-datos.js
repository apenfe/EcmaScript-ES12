// String
// Number
// Boolean

let nombre = "asdfg";

console.log(typeof nombre);

// arrays
let nombres = ["adrian","luis"];

// JSON

let pelicula = {
    titulo: "space jam",
    genero: "animacion",
    year: 1996,
    director: "Tarantino",
    mostrar: function(){
        return `${this.titulo} es una muy buena pelicula`;
    }
}

console.log(pelicula);
console.log(pelicula.titulo);
console.log(pelicula.mostrar());

pelicula.pais = "EEUU";
console.log(pelicula);

pelicula["contienete"] = "america";
console.log(pelicula);

delete pelicula.director;
console.log(pelicula.director);

// ver si existe una clave en un objeto
console.log("titulo" in pelicula);

for(let clave in pelicula){
    console.log(clave)
    console.log(pelicula[clave])
}

// symbol
let animal = Symbol("tigre");

console.log(animal);

let animal2 = Symbol("tigre");

console.log(animal2);
console.log(animal == animal2);

let user = {
    id: 1,
    nombre: "adrian",
    web: "dddff"
};

let id = Symbol("id");
user[id] = 7;

console.log(user)