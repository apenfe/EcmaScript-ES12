let lista = document.querySelectorAll("#lista li");

lista.forEach(element => {
    let con = element.dataset.continente;
    element.innerHTML += " | " + con;
});