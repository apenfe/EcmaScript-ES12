let productos = [
    {
        nombre: "ordenador gaming",
        marca: "msi",
        precio: 1200
    },
    {
        nombre: "tablet",
        marca: "samsung",
        precio: 400
    },
    {
        nombre: "camra reflex",
        marca: "canon",
        precio: 800
    },
];

function conseguirProductos() {

    return new Promise((resolve, reject) => {
        console.log("Cargando productos...")
        setTimeout(() => {

            let i = 1;
            if (i == 1) {
                resolve(productos);
            } else {
                reject("algo no  ha funcionado");
            }
        }, 3000);

    });

}

async function getMisProductos() {

    try {

        let misProductos = await conseguirProductos();
        console.log(misProductos);

    } catch (error) {

        console.log(error.message);

    }

}

getMisProductos();