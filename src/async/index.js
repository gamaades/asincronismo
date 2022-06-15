const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve("Haz algo async"), 3000)
        : reject(new Error("Test Error"))
    })
}

const doSomething = async () => {
    const someThing = await doSomethingAsync();
    console.log(someThing);
}

console.log("Before");
doSomething();
console.log("After");

const anotherFuntion = async () => {
    try {
        const someThing = await doSomethingAsync();
        console.log(someThing);
    } catch (error) {
        console.log(error);
    }
}


console.log("Before 2");
anotherFuntion();
console.log("After 2");