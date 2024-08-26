let nuevoPost = JSON.stringify({
    title: "este es mi post",
    body: "contenido del post",
    userId: 54
});

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: nuevoPost,
    headers: {
        "Content-Type": "application/json; charset=UTF-8"
    }
})
    .then(response => response.json())
    .then(datos => {
        console.log(datos);
    })
    .catch(error => console.log(error))