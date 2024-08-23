let nombres = ["adrian", "andres", "lorenzo"];

// for of, es el equivalente al normal (recorre el contenido)

for(let nombre of nombres){
    console.log(nombre);
}

// for in (recorre indice de objeto) muy util para json
for(let indice in nombres){
    console.log(indice);
    console.log(nombres[indice]);
}

// foreach (admite callback con elemento, indice y arreglo)
nombres.forEach((nombre, indice, array) => {
    console.log(nombre + ", indice: "+indice+", Array: "+array);
});

// ITERABLES (NUEVOS)
const mi_iterable = nombres[Symbol.iterator]();

console.log(mi_iterable);
console.log(typeof mi_iterable);

console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());
console.log(mi_iterable.next());

let fruta = {
    nombre: "manzana",
    color: "verde",
    temporada: "invierno"
};

fruta[Symbol.iterator] = function (){
    let indice = 0;
    let valores = Object.values(this);

    return{
        next(){

            if(indice >= valores.length){
                return {
                    done: true,
                    value: undefined
                };
            }
            
            return {
                done: false,
                value: valores[indice],
                indice: indice++
            };
            
        }
    };
}

for(let propiedad in fruta){
    console.log(propiedad+": "+ fruta[propiedad]);
}