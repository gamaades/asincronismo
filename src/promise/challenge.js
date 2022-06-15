// importamos la funcion
const fetchData = require("../utils/fetchData");
// declaramos la ruta de la api
let API = "https://rickandmortyapi.com/api/character/";
//se hace el primer llamado y luego que resuelve esa información, ya se puede presentar en la consola o hacer algo con ella (linea 6), después se realiza el return de una nueva petición, lo cual permite volver a obtener esa información, presentarla en consola y así sucesivamente. Y al final lo único que se hace es poner un catch que nos va a permitir mostrar el error.
fetchData(API)
    .then(data => {
        // imprimimos el numero de personajes
        console.log(data.info.count);
        // volvemos a hacer la promesa de pedir algo, en este caso el personaje 1: Rick
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        // esperamos la promesa anterior y vemos el nombre de rick
        console.log(data.name);
        // volvemos a hacer la promesa, pero esta es sobre la dimension de Rick
        return fetchData(data.origin.url)
    })
    .then(data => {
        // vemos la dimension de rick
        console.log(data.dimension);
    })
    // si hay error
    .catch(err => console.error(err));
