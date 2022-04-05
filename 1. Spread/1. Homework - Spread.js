//! Spread:

//* 1

//? Operaciones con "spread":

const resta = (a, b, c) => a - b - c;

const arrNums = [50, 20, 10];

console.log(resta(...arrNums));

//* 2

//? "Push" + "Spread":

let arr1 = ["paz", "calma", 25, true];

let newArr = [...arr1];

arr1.push("bienestar");
newArr.push(10, "amor propio");

console.log("El contenido de 'arr1' es: ", arr1, "El contenido de 'newArr' es: ", newArr);

//* 3

//?Concatenando con "spread":

const arrA = [10, 15, 20];
const arrB = ["soy mi sostén", "me siento segura"];

const arrC = [...arrA, ...arrB];

console.log(arrC);