/* javascript Math.Object Method */

// The Math namespace object contains static properties and methods for mathematical constants and functions.


// Math.E;
// Math.Pow();
// Math.ceil();
// Math.floor();
// Math.trunc();
// Math.min();
// Math.max();
// Math.sqrt();
// Math.log();
// Math.log2();
// Math.log10();
// Math.random();
// Math.sign();
// Math.round();
// Math.sin();
// Math.cos();
// Math.tan();
{
  // Math.E
console.log("Math.E");

  let math = Math.E;
  console.log(math);
}

{
  //Math.PI
console.log("Math.PI");

  let math = Math.PI;
  console.log(math);
}

{
  // Math.Pow()
console.log("Math.Pow()");

  let math = Math.pow(4, 3);

  console.log(math);
}

{
  // Math.ceil()
console.log("Math.ceil()");

  let math = Math.ceil(22.01);

  console.log(math);
}

{
  // Math.floor()
console.log("Math.floor()");

  let math = Math.floor(45.3);

  console.log(math);
}

{
  // Math.trunc()
console.log("Math.trunc()");

  let math = Math.trunc(-78.9);

  console.log(math);
}

{
  // Math.max() / Math.min()

  let arr = [45, 12, 1, 89, 101, 576];

  let newarray = [...arr];

  // console.log(typeof arr);

  // console.log(newarray);

  // let math = Math.max(45 , 12 , 1 , 89 , 101 , 576)
  console.log("Math.max()");
  
  let math = Math.max(...newarray);
  console.log("Math.min()");
  
  let math1 = Math.min(45, 12, 1, 89, 101, 576);

  console.log(math);
  console.log(math1);
}

{
  // Math.sqrt()
console.log(" Math.sqrt()");

  let math = Math.sqrt(625);

  console.log(math);
}

{
  // Math.log() / Math.log2() / Math.log10()
console.log("Math.log()");
console.log("Math.log2()");
console.log("Math.log10()");


  let math = Math.log(10);
  let math1 = Math.log2(10);
  let math10 = Math.log10(10);

  console.log(math);
  console.log(math1);
  console.log(math10);
}

{
  // Math.random()
console.log("Math.random()");

  let math = Math.floor(Math.random() * 10000);

  console.log(math);
}

{
  // Math.sign()
console.log("Math.sign()");

  let math = Math.sign();

  console.log(math);
}

{
  // Math.abs()
console.log("Math.abs()");

  let math = Math.abs(-45.45);

  console.log(math);
}

{
  // Math.sin() / Math.cos() / Math.tan()

  // let math = degree * Math.PI / 180
console.log("Math.sin()");
let math =  Math.sin(90 * Math.PI / 180)
console.log("Math.cos()");

  let mathcos = Math.cos((90 * Math.PI) / 180);

  // console.log(math);
  console.log(mathcos);
}

{
  // Math.round()
console.log(" Math.round()");

  let math = Math.round(21.53);

  console.log(math);
}

// {
// // 1) Math.E

// // Ye Euler's number hota hai (~2.718). Ye ek constant hai jo mostly logarithms aur exponential calculations me use hota hai.

// // 2) Math.pow(x, y)

// // Ye function x ka power y nikalta hai.
// // Example: Math.pow(2, 3) → 2³ = 8

// // 3) Math.ceil(x)

// // Ye number ko upar wale nearest integer tak round karta hai.
// // Example: Math.ceil(4.2) → 5

// // 4) Math.floor(x)

// // Ye number ko neeche wale nearest integer tak round karta hai.
// // Example: Math.floor(4.9) → 4

// // 5) Math.trunc(x)

// // Ye decimal part hata deta hai aur bas integer part return karta hai.
// // Example: Math.trunc(4.9) → 4

// // 6) Math.min(a, b, c, …)

// // Ye minimum (sabse chhota) number return karta hai.
// // Example: Math.min(5, 2, 9) → 2

// // 7) Math.max(a, b, c, …)

// // Ye maximum (sabse bada) number return karta hai.
// // Example: Math.max(5, 2, 9) → 9

// // 8) Math.sqrt(x)

// // Ye square root nikalta hai.
// // Example: Math.sqrt(16) → 4

// // 9) Math.log(x)

// // Ye natural logarithm nikalta hai (base e).
// // Example: Math.log(Math.E) → 1

// // 10) Math.log2(x)

// // Ye log base 2 ka value return karta hai.
// // Example: Math.log2(8) → 3

// // 11) Math.log10(x)

// // Ye log base 10 ka value return karta hai.
// // Example: Math.log10(100) → 2

// // 12) Math.random()

// // Ye 0 aur 1 ke beech ka random number deta hai.
// // Example: Math.random() → 0.5487 (Har baar alag hoga)

// // 13) Math.sign(x)

// // Ye number ka sign batata hai:

// // +1 → Positive number

// // -1 → Negative number

// // 0 → Zero

// // Example: Math.sign(-5) → -1

// // 14) Math.round(x)

// // Ye number ko nearest integer tak round karta hai.
// // Example: Math.round(4.5) → 5
// // Example: Math.round(4.4) → 4

// // 15) Math.sin(x)

// // Ye angle (radians me) ka sine value return karta hai.
// // Example: Math.sin(Math.PI / 2) → 1

// // 16) Math.cos(x)

// // Ye angle (radians me) ka cosine value return karta hai.
// // Example: Math.cos(0) → 1

// // 17) Math.tan(x)

// // Ye angle (radians me) ka tangent value return karta hai.
// // Example: Math.tan(Math.PI / 4) → 1
// }


// {
//   1) Math.E

// A mathematical constant representing Euler's number (~2.718), used in logarithms and exponential calculations.

// 2) Math.pow(x, y)

// Returns x raised to the power of y (xʸ).
// Example: Math.pow(2, 3) → 8

// 3) Math.ceil(x)

// Rounds a number upward to the nearest integer.
// Example: Math.ceil(4.2) → 5

// 4) Math.floor(x)

// Rounds a number downward to the nearest integer.
// Example: Math.floor(4.9) → 4

// 5) Math.trunc(x)

// Removes the decimal part and keeps only the integer part.
// Example: Math.trunc(4.9) → 4

// 6) Math.min(a, b, c, …)

// Returns the smallest (minimum) value among the numbers.
// Example: Math.min(5, 2, 9) → 2

// 7) Math.max(a, b, c, …)

// Returns the largest (maximum) value among the numbers.
// Example: Math.max(5, 2, 9) → 9

// 8) Math.sqrt(x)

// Returns the square root of a number.
// Example: Math.sqrt(16) → 4

// 9) Math.log(x)

// Returns the natural logarithm (base e) of a number.
// Example: Math.log(Math.E) → 1

// 10) Math.log2(x)

// Returns the logarithm of x with base 2.
// Example: Math.log2(8) → 3

// 11) Math.log10(x)

// Returns the logarithm of x with base 10.
// Example: Math.log10(100) → 2

// 12) Math.random()

// Generates a random number between 0 (inclusive) and 1 (exclusive).
// Example: Math.random() → 0.4567 (varies each time)

// 13) Math.sign(x)

// Returns the sign of a number:

// +1 → positive

// -1 → negative

// 0 → zero

// Example: Math.sign(-5) → -1

// 14) Math.round(x)

// Rounds a number to the nearest integer.
// Example: Math.round(4.5) → 5

// 15) Math.sin(x)

// Returns the sine of an angle (in radians).
// Example: Math.sin(Math.PI / 2) → 1

// 16) Math.cos(x)

// Returns the cosine of an angle (in radians).
// Example: Math.cos(0) → 1

// 17) Math.tan(x)

// Returns the tangent of an angle (in radians).
// Example: Math.tan(Math.PI / 4) → 1
// }