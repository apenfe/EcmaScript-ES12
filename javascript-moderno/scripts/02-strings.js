
// string clasicos

let nombre = "adrian";
let apellidos = "peñalver";
let profesion = "desarrollador WEB"

let nya = nombre + " " + apellidos + "\n" + profesion;

console.log(nya);

// template strings ` `

let plantilla = `
Hola,
    soy

    ${nombre} ${apellidos}

    Me dedico a ${profesion}
`;

console.log(plantilla);

function ficha(name, surname, prof){

    let fichaTecnica = `
    <div class="ficha">
        <h2>${name} ${surname}</h2>
        <h3>${prof}</h3>
        <p>Forma parte del equipo de Odin Solutions</p>
    </div>
    `;

    return fichaTecnica;

}

let cajaFichas = document.createElement("section");
cajaFichas.innerHTML = ficha("adrian","peñalver","desarrollador");
cajaFichas.innerHTML += ficha("Mario","serrador","socorrista");;

document.addEventListener("DOMContentLoaded",() => {
    document.body.appendChild(cajaFichas);
});


