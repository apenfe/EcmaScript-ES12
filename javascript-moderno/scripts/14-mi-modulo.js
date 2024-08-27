function imprimirArray(datos) {

    datos.forEach(element => {
        console.log(element);

    });

    return datos;
}

function saludo(saludo) {

    console.log(saludo);

    return saludo;
}

export default {
    imprimirArray,
    saludo
};