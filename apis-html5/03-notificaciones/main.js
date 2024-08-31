// notificaciones

if (Notification == "undefined") {
    console.log('Tu navegador no es compatible con las notificaciones');
} else {
    console.log('Tu navegador es compatible con las notificaciones');

    // pedir permiso
    if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }

    Notification.requestPermission();

    let principal = "hola soy una notificacion";
    let opciones = {
        body: "Cuerpo de la notificacion",
        icon: "./png-clipart-stranger-things-folder-icons-stranger-things-v1-thumbnail.png"
    }

    const notificacion = new Notification(principal, opciones);

    notificacion.onclick = (event) => {
        event.preventDefault();
        window.open("https://apenfe.es");
    }

    // hacer tiempo expiracion
    setTimeout(() => {
        notificacion.close()
    }, 5000);

}

