// 81) JavaScript Program To Perform Intersection Between Two Arrays w
{

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const result = array1.filter(element => array2.includes(element));

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Intersection:", result);



}

{
  // 80) JavaScript Program to Get Random Item From an Array

const array = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Generate random index
const randomIndex = Math.floor(Math.random() * array.length);

// Get random item
const randomItem = array[randomIndex];

console.log("Array:", array);
console.log("Random Item:", randomItem);

}