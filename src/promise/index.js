/*** Aqui la promesa se ejecuta al cargar el archivo ***/

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve("Hey!");
        } else {
            reject("Whoooops!");
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

/*** Aqui la promesa no se ejecuta hasta que se llame a la funcion ***/
const somethingWillHappe2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve("true");
            }, 2000);
        } else {
            const error = new Error("Whooop!");
            reject(error);
        }
    });
}

somethingWillHappe2()
    .then(response => console.log(response))
    .catch(err => console.log(err));
    //.then(() => console.log("Buena!"))

// Para correr todas las promesas tenemos el método Promise.all() que nos retornara un array con la respuesta de todas las promesas que pasemos como parametro.
Promise.all([somethingWillHappen(), somethingWillHappe2()])
    .then(response => {
        console.log("Array of result", response);
    })
    .catch(err => {
        console.error(err);
    })