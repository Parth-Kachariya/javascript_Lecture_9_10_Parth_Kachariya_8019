// project-4-UDF
console.log("-------- Function --------");

{
  // 1. Simple Addition Function
  function addition(num1, num2) {
    let result = num1 + num2;
    console.log(result);
  }
  addition(5, 10);
}
console.log("---------------------");

{
  // 2. Check Even or Odd function
  function evenodd(num) {
    if (num % 2 === 0) {
      console.log("Even  number");
    } else {
      console.log("Odd number");
    }
  }
  evenodd(7);
}
console.log("---------------------");
{
  // 3. Square of a Number function
  function square(num) {
    let result = num * num;
    return result;
  }
  console.log(square(4));
}
console.log("---------------------");
{
  // 4. String Capitalizer function
  function capitalize(str) {
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    return result;
  }
  console.log(capitalize("pARTH"));
}
// console.log("---------------------");
console.log("--------Arrow Function --------");

{
  // 1. Simple Addition  with Arrow Function
  let addition = (num1, num2) => {
    let result = num1 + num2;
    return result;
  };
  console.log(addition(10, 10));
}
console.log("---------------------");
{
  // 2. Check Even or Odd Arrow function
  let evenodd = (num) => {
    if (num % 2 === 0) {
      console.log("Even  number");
    } else {
      console.log("Odd number");
    }
  };
  evenodd(8);
}
console.log("---------------------");
{
  // 3. Square of a Number Arrow function
  let square = (num) => {
    let result = num * num;
    console.log(result);
  };
  square(8);
}
console.log("---------------------");
{
  // 4. String Capitalizer function
  let UpperCase = (str) => {
    let result = str.charAt(0).toUpperCase() + str.slice(1);
    console.log(result);
  };
    (UpperCase("hello"));
}
console.log("---------------------");
