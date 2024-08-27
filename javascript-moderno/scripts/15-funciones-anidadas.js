let nombre = "adrian";

function mostrarNombre() {

    let apellidos = "peñalver";

    function mostrarApellidos() {

        let profesion = "desarrollador web";

        function mostrarProfesion() {

            return nombre + " " + apellidos + ", " + profesion;

        }

        return mostrarProfesion;

    }

    return mostrarApellidos;

}

console.log(mostrarNombre()()());
