if (navigator.geolocation) {
    console.log('esta disponible');

    // obtener mi posicion
    navigator.geolocation.getCurrentPosition((position) => {

        let latitud = position.coords.latitude;
        let longitud = position.coords.longitude;

        console.log('Su latitud es: ' + latitud);
        console.log('Su longitud es: ' + longitud);

        console.log(position);


    }, (error) => {
        console.log('hay un error en la geolocalizacion');

    });
}