//Primero hay que instalar XMLHttpRequest con npm install XMLHttpRequest desde la terminal (tiene que estar dentro de la carpeta del programa)
//luego hay que llamarla (instanciarla).

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

//crearemos una funcion que se llamara fetchData, que nos permitira traer la informacion desde nuestra API, al cual tambien le vamos a pasar un callback y despues vamos a desencadenar los llamdados que nosotros necesitamos y de esta forma vamos a cumplir con el reto
const fetchData = (url_api) => {

    return new Promise((resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);
        xhttp.onreadystatechange = (() => {
            /* Los estados que puede tener son:
            estado 0: inicializado
            estado 1: cargando
            estado 2: ya se cargó
            estado 3: ya hay información
            estado 4: solicitud completa
            PD: recuerda estas trabajando con una API externa osea un servidor por lo que depende del servidor cuanto demore en cada estado haces un pedido por datos (request) y solo es aplicar lógica. */
            if (xhttp.readyState === 4) {
                // Verificar estado, aqui un resumen de los casos mas comunes:
                /* ESTADO 1xx (100 - 199): Indica que la petición esta siendo procesada.
                ESTADO 2xx (200 - 299): Indica que la petición fue recibida, aceptada y procesada correctamente.
                ESTADO 3xx (300 - 399): Indica que hay que tomar acciones adicionales para completar la solicitud. Por lo general indican redireccionamiento.
                ESTADO 4xx (400 - 499): Errores del lado del cliente. Indica se hizo mal la solicitud de datos.
                ESTADO 5xx (500 - 599): Errores del Servidor. Indica que fallo totalmente la ejecución. */
                (xhttp.status === 200)
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error("Error", url_api))
            }
        });
        xhttp.send();
    })
}

module.exports = fetchData;