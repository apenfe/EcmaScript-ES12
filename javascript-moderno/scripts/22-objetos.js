let titulo = "El señor de los anillos";
let genero = "accion";
let duracion = "2 horas";

const pelicula = {
    titulo,
    genero,
    duracion,
    [genero + "2022"]: "hola",
    mostrar() {
        return this.titulo + " " + this.duracion;
    }
}

console.log(pelicula);

console.log(Object.values(pelicula));

Object.entries(pelicula).forEach(elemento => {
    console.log(elemento[0] + ": " + elemento[1]);

});
