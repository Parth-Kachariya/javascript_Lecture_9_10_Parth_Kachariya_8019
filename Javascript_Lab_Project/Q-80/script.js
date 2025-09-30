// 80) JavaScript Program to Get Random Item From an Array

let array = [10.3, 20, 30.6, 40, 50.5, 60];

let result = Math.floor(Math.random() * array.length);

let finalresult = array[result];

console.log("Array:", array);
console.log("Random number in array:", finalresult);
