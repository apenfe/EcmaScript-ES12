// parametros por defecto
function saludo(persona = ""){
    console.log("hola te mando un saludo " + persona);
}

saludo("Adrián");
saludo();

// funciones flecha

let saludo2 = function(persona = ""){
    console.log("hola te mando un saludo " + persona);
}

saludo2("Adrián");
saludo2();

let saludo3 = nombre => "hola te mando un saludo " + nombre;
console.log(saludo3("Adrián"));

let saludo4 = (nombre, edad) => "hola te mando un saludo " + nombre+ ", "+edad;
console.log(saludo4("Adrián",36));

let saludo5 = (nombre, edad) => {
    edad++;
    return "hola te mando un saludo " + nombre+ ", "+edad;
};
console.log(saludo5("Adrián",36));

// FUNCIONES FLECHA EN JSON
let tienda = {
    nombre: "game",
    videojuegos: ["gta","vicecity"],
    mostrar: function(){
        console.log(this.nombre);
    },
    mostrar2(){
        console.log(this.nombre);
    },
    mostrar3: () => {
        console.log(tienda.nombre); // en las funciones flecha no existe el operador this
    }

}

tienda.mostrar();
tienda.mostrar2();
tienda.mostrar3();