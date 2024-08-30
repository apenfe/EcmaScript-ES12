// some alguno

let personas = ["adrian", "paco", "juan", "antonio"];
let paises = [
    {
        nombre: "españa",
        continente: "europa"
    },
    {
        nombre: "francia",
        continente: "europa"
    },
    {
        nombre: "china",
        continente: "asia"
    },
];

let esistealguno = personas.some(nombre => nombre == "adrian");
console.log(esistealguno);

// every

let esigualentodos = paises.every(pais => pais.continente == "europa");
console.log(esigualentodos);

// reduce
console.log(personas.reduce((acumulador, actual) => {
    return acumulador + actual;
}));


