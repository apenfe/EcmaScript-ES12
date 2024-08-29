// craer set
let gadgets = new Set(["movil", "tablet", "pc"])

//agregar elementos
gadgets.add("2")
gadgets.add("movil")
gadgets.add("headphones")

console.log(gadgets);

// recorrer el set
for (let item of gadgets) {
    console.log(item);
}

// sacar tamaño del set
console.log(gadgets.size);

// eliminar
gadgets.delete("tablet")

for (let item of gadgets) {
    console.log(item);
}

// comprobar existencia
let existe = gadgets.has("headphones");
console.log(existe);

// eliminar todo 
gadgets.clear();
console.log(gadgets);

