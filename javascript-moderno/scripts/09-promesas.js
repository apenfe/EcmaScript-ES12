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
        }, 1000);

    });

}

function productoComprado(nombre) {

    return new Promise((resolve, reject) => {
        console.log("Haciendo la compra...")
        setTimeout(() => {

            let i = 1;
            if (i == 1) {

                resolve({
                    producto: nombre,
                    cliente: "adrian peñalver"
                });

            } else {
                reject("error en la compra");
            }

        }, 2000);

    });

}

function procesarVenta(venta) {
    console.log("Producto comprado:", venta);
    productos = productos.filter(producto => { return producto.nombre != venta.producto });

    return productos;
}

conseguirProductos()
    .then(items => {
        console.log("productos disponibles: ", items);
        return productoComprado("ordenador gaming");
    })
    .then(venta => {
        procesarVenta(venta);
        return productoComprado("tablet");
    })
    .then(venta => {
        procesarVenta(venta);
    })
    .catch(error => console.log(error))
    .finally(() => {

        if (productos.length >= 1) {
            console.log("productos disponibles: ", productos);
        } else {
            console.log("No hay productos disponibles");
        }

        console.log("Promesa finalizada");

    });

Promise.all([conseguirProductos(), productoComprado("ordenador gaming"), productoComprado("tablet")])
    .then(venta => {
        console.log(venta);
    });