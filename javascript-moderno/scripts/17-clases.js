class Coche {

    #npuertas = 4; //? PRIVADO
    _nplazas = 5; //? PROTECTED

    //constructor
    constructor(marca, modelo, color = "blanco", velocidad, year = 2020) {

        // atributos o propiedades
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.color = color;
        this.year = year;
    }

    // metodos
    subirVelocidad() {
        this.velocidad++;
    }

    bajarVelocidad() {
        this.velocidad--;
    }

    //! setters y getters
    get getPlazas() {
        return this._nplazas;
    }

    get getPuertas() {
        return this.#npuertas;
    }

    set setPuertas(puertas) {
        this.#npuertas = puertas;
    }

    get getMarca() {
        return this.marca;
    }

    set setMarca(marca) {
        this.marca = marca;
    }

    get getModelo() {
        return this.modelo;
    }

    set setModelo(modelo) {
        this.modelo = modelo;
    }

    get getVelocidad() {
        return this.velocidad;
    }

    set setVelocidad(velocidad) {
        this.velocidad = velocidad;
    }

    get getColor() {
        return this.color;
    }

    set setColor(color) {
        this.color = color;
    }

    get getYear() {
        return this.year;
    }

    set setYear(year) {
        this.year = year;
    }

    //! metodo estatico
    static saludar(nombre) {
        return "hola " + nombre;
    }

}

let miCoche1 = new Coche("mercedes", "clase a", "azul", 0, 2024);
console.log(miCoche1.marca);

let miCoche2 = new Coche("renault", "clio", "azul", 0);
console.log(miCoche2.year);

miCoche2.setColor = "marron";
console.log(miCoche2.getColor);

console.log(Coche.saludar("adrian"));

//! HERENCIA 

class Quad extends Coche {

    constructor(marca, modelo, color, velocidad, year, plazas) {

        super(marca, modelo, color, velocidad, year);
        this._nplazas = plazas;

    }

}

let mi_quad = new Quad("suzuki", "quark", "rojo", 0, 2023, 2);
console.log(mi_quad);
