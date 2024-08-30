let persona = {
    nombre: "adrian",
    apellidos: "peñalver",
    direccion: {
        pais: "españa",
        ciudad: {
            nombre: "Murcia",
            provincia: "Murcia"
        }
    }
}

let comprobarProvincia = persona?.direccion?.ciudad?.provincia;
console.log(comprobarProvincia);

persona = {
    nombre: "adrian",
    apellidos: "peñalver",
    direccion: {
        pais: "españa",
        ciudad: {
            nombre: "Murcia",
        }
    }
}

comprobarProvincia = persona?.direccion?.ciudad?.provincia;
console.log(comprobarProvincia);
