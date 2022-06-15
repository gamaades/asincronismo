const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

//creamos una funcion que sera asincrona en la cual trabajaremos con async await
const anotherFuntion = async (url_api) => {
    try {
        //creamos 3 constantes para las 3 peticiones que necesitamos
        const data = await fetchData(url_api);
        const character = await fetchData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error) {
        console.log(error);
    }
}

console.log("Antes");
anotherFuntion(API);
console.log("Despues");