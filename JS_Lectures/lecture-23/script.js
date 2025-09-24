// Array.find()

// find(callbackFn)
// find(callbackFn, thisArg)

{
  let array = [52, 45, 65, 78, 20];

  let result = array.find((value) => value < 50);

  let result1 = array.findLast((val) => val < 50);

  console.log(result);

  console.log(result1);
}

// Array.findIndex()

// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

{
  let array = [52, 45, 65, 78, 20, 25];

  let result = array.findIndex((val) => val < 45);
  let result1 = array.findLastIndex((val) => val < 45);

  console.log(result);
  console.log(result1);
}

// Array.forEach()

// forEach(callbackFn)
// forEach(callbackFn, thisArg)

{
  let array = ["a", "b", "c"];

  let result = array.forEach((v) => console.log(v));
  let result1 = array.map((v) => console.log(v));

  console.log(result);
  console.log(result1);
}

// Array.indexOf()
// Array.lastIndexOf()

// indexOf(searchElement)
// indexOf(searchElement, fromIndex)
// lastIndexOf(searchElement)
// lastIndexOf(searchElement, fromIndex)

{
  let array = ["HTML", "CSS", "Javascript", "ReactJs", "NodeJs", "CSS"];

  let result = array.indexOf("CSS");
  let result1 = array.indexOf("CSS", 3);
  let result2 = array.lastIndexOf("CSS");
  let result3 = array.lastIndexOf("CSS", 4);

  console.log(result);
  console.log(result1);
  console.log(result2);
  console.log(result3);
}

{
  // function calling-method- return value and without return value
  // Return value chahiye → console.log(functionName())
  // Bas action chahiye → functionName()
}
{
  //1.Primitive Data Types
  // String
  // Number
  // Boolean
  // Null
  // Undefined
  // Symbol
  // BigInt

  
  // 2. Non-Primitive (Reference) Data Types
  // Array
  // Object
  // Function
  // Date
  // RegExp
  // Map
  // Set
  // WeakMap
  // WeakSet
}
