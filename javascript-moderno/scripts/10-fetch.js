fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(datos => {
        console.log(datos[82].title);
        mostrar(datos)
    })
    .catch(error => console.log(error))

function mostrar(elementos) {

    let contenedor = document.querySelector("#contendor");

    elementos.forEach(element => {

        let muestrame = `
            <article>
                <h2>${element.title}</h2>
                <p>${element.body}</p>
            </article>
            <br>
        `;

        contenedor.innerHTML += muestrame;
    });

}