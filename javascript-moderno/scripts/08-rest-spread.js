// SPREAD
let heroes = ["batman", "spiderman", "superman"];

console.log(...heroes);

function mostrarHeroes(heroe1, heroe2){
    console.log(`
        *** MIS DOS SUPERHEROES FAVORITOS ***
            -${heroe1}
            -${heroe2}
        `);
}

mostrarHeroes(...heroes);

let superheroes = ["catwoman", "flash", ...heroes];
console.log(...superheroes);

// REST

function peliculas(pelicula1, pelicula2, ...restoPeliculas){
    console.log(pelicula1);
    console.log(pelicula2);
    console.log(...restoPeliculas);
}

peliculas("faf","rey leon","algo1","algo2");