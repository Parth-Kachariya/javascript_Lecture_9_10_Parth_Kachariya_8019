/* javascript Math.Object Method */

// The Math namespace object contains static properties and methods for mathematical constants and functions.

// Math.E
//Math.PI
// Math.Pow()
// Math.ceil()
// Math.floor()
// Math.trunc()
// Math.max()
//  Math.min()
// Math.sqrt()
// Math.log()
//  Math.log2()
//  Math.log10()
// Math.random()
// Math.sign()
// Math.abs()
// Math.sin()
//  Math.cos()
//  Math.tan()
// Math.round()

// Example and Use
{
  // 1. Math.E

  // Use: Euler’s number (2.718...) return karta hai. Mostly log aur exponential calculations ke liye.

  console.log(Math.E);
  console.log("------------------------------");
}
{
  // 2. Math.PI

  // Use: PI value (3.14159...) return karta hai. Mostly circle area ya circumference ke liye.

  console.log(Math.PI);
  console.log("------------------------------");
}
{
  // 3. Math.pow(x, y)

  // Use: x ko power y se multiply karta hai, yaani x^y.

  console.log(Math.pow(2, 3)); // 8  (2^3)
  console.log("------------------------------");
}
{
  // 4. Math.ceil()

  // Use: Number ka upper integer deta hai, decimal hamesha upar round hota hai.

  console.log(Math.ceil(5.1)); // 6
  console.log("------------------------------");
}
{
  // 5. Math.floor()

  // Use: Number ka lower integer deta hai, decimal hamesha niche round hota hai.

  console.log(Math.floor(3.9)); // 3
  console.log("------------------------------");
}
{
  // 6. Math.trunc()

  // Use: Decimal part hata deta hai, sirf integer part deta hai.

  console.log(Math.trunc(5.9)); // 5
  console.log("------------------------------");
}
{
  // 7. Math.max()

  // Use: Maximum value find karta hai.

  console.log(Math.max(10, 20, 30));
  console.log("------------------------------");
}
{
  // 8. Math.min()

  // Use: Minimum value find karta hai.

  console.log(Math.min(10, 20, 30));
  console.log("------------------------------");
}
{
  // 9. Math.sqrt()

  // Use: Square root nikalta hai.

  console.log(Math.sqrt(16)); // 4
  console.log("------------------------------");
}
{
  // 10. Math.log()

  // Use: Natural logarithm (base e) nikalta hai.

  console.log(Math.log(10));
  console.log("------------------------------");
}
{
  // 11. Math.log2()

  // Use: Log base 2 nikalta hai.

  console.log(Math.log2(8)); // 3 2*2*2=8
  console.log("------------------------------");
}
{
  // 12. Math.log10()

  // Use: Log base 10 nikalta hai.

  console.log(Math.log10(100)); // 2
  console.log("------------------------------");
}
{
  // 13. Math.random()

  // Use: 0 aur 1 ke beech random number generate karta hai.

  console.log(Math.random());
  console.log(Math.random() * 10); // 1-10 ke beech
  console.log("------------------------------");
}
{
  // 14. Math.sign()

  // Use: Positive number ke liye 1, negative ke liye -1 aur 0 ke liye 0 return karta hai.

  console.log(Math.sign(-5)); // -1
  console.log(Math.sign(10)); // 1
  console.log(Math.sign(0)); // 0
  console.log("------------------------------");
}
{
  // 15. Math.abs()

// Use: Number ka absolute value (negative ko positive) return karta hai.

console.log(Math.abs(-8)); // 8
console.log("------------------------------");

}

{
  // 16. Math.sin()

// Use: Angle ka sine value return karta hai (angle radian me hota hai).

console.log(Math.sin(Math.PI / 2)); 
console.log("------------------------------");
}
{
  // 17. Math.cos()

// Use: Angle ka cosine value return karta hai.

console.log(Math.cos(0)); 
console.log("------------------------------");
}
{
  // 18. Math.tan()

// Use: Angle ka tangent value return karta hai.

console.log(Math.tan(Math.PI / 4)); 
console.log("------------------------------");
}

{
  // 19. Math.round()

// Use: Decimal number ko nearest integer me round karta hai.

console.log(Math.round(4.5)); // 5
console.log(Math.round(4.4)); // 4
console.log(Math.round(4.6)); // 5
console.log("------------------------------");

}
{
  // Rarely used Math methods
  // Math.cbrt()
  // Math.clz32()
  // Math.fround()
  // Math.expm1()
  // Math.hypot()
  // Math.imul()
  // Math.acos()
  // Math.asin()
  // Math.atan()
  // Math.atan2()
  // Math.sinh()
  // Math.cosh()
  // Math.tanh()
  // Math.asinh()
  // Math.acosh()
  // Math.atanh()
}

// Example
{
  //   console.log("Math.E : ", Math.E);
  // console.log("Math.PI : ", Math.PI);
  // console.log("Math.Pow(2,3) : ", Math.pow(2, 3));
  // console.log("Math.ceil(4.2) : ", Math.ceil(4.2));
  // console.log("Math.floor(4.7) : ", Math.floor(4.7));
  // console.log("Math.trunc(4.7) : ", Math.trunc(4.7));
  // console.log("Math.max(1,2,3,4,5) : ", Math.max(1, 2, 3, 4, 5));
  // console.log("Math.min(1,2,3,4,5) : ", Math.min(1, 2, 3, 4, 5));
  // console.log("Math.sqrt(16) : ", Math.sqrt(16));
  // console.log("Math.log(10) : ", Math.log(10));
  // console.log("Math.log2(8) : ", Math.log2(8));
  // console.log("Math.log10(100) : ", Math.log10(100));
  // console.log("Math.random() : ", Math.random());
  // console.log("Math.sign(-5) : ", Math.sign(-5));
  // console.log("Math.abs(-5) : ", Math.abs(-5));
  // console.log("Math.sin(Math.PI/2) : ", Math.sin(Math.PI / 2));
  // console.log("Math.cos(0) : ", Math.cos(0));
  // console.log("Math.tan(Math.PI/4) : ", Math.tan(Math.PI / 4));
  // console.log("Math.round(4.5) : ", Math.round(4.5));
  // console.log("Math.round(4.4) : ", Math.round(4.4));
  // console.log("Math.round(4.6) : ", Math.round(4.6));
  // console.log("Math.cbrt(27) : ", Math.cbrt(27));
  // console.log("Math.clz32(1) : ", Math.clz32(1));
  // console.log("Math.fround(5.5) : ", Math.fround(5.5));
  // console.log("Math.expm1(1) : ", Math.expm1(1));
  // console.log("Math.hypot(3,4) : ", Math.hypot(3, 4));
  // console.log("Math.imul(2,3) : ", Math.imul(2, 3));
  // console.log("Math.acos(1) : ", Math.acos(1));
  // console.log("Math.asin(1) : ", Math.asin(1));
  // console.log("Math.atan(1) : ", Math.atan(1));
  // console.log("Math.atan2(1,1) : ", Math.atan2(1, 1));
  // console.log("Math.sinh(0) : ", Math.sinh(0));
  // console.log("Math.cosh(0) : ", Math.cosh(0));
  // console.log("Math.tanh(0) : ", Math.tanh(0));
  // console.log("Math.asinh(1) : ", Math.asinh(1));
  // console.log("Math.acosh(1) : ", Math.acosh(1));
  // console.log("Math.atanh(0.5) : ", Math.atanh(0.5));
}

// ---------------------Learn More js Math Object |---------------------

{
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  // https://www.w3schools.com/js/js_math.asp
  // https://www.javascripttutorial.net/javascript-math/
  // https://javascript.info/numbers#math
  // https://www.freecodecamp.org/news/javascript-math-object-explained-with-examples/
  // https://www.programiz.com/javascript/library/math
  // https://www.geeksforgeeks.org/javascript-math-object/
  // https://www.tutorialspoint.com/javascript/javascript_math_object.htm
  // https://www.educative.io/answers/what-is-the-math-object-in-javascript4
  // https://www.scaler.com/topics/javascript/javascript-math-object/
  // https://www.javatpoint.com/javascript-math
  // https://www.tutorialride.com/javascript/javascript-math-object.htm
  // https://www.tutorialandexample.com/javascript-math-object
  // https://www.dotnetperls.com/math-javascript
  // https://www.tutorialcup.com/javascript/javascript-math-object.htm
  // https://www.tutorialgateway.org/javascript-math-object/
  // https://www.codingem.com/javascript-math-object/
  // https://www.techiedelight.com/what-is-math-object-in-javascript/
  // https://www.tutorialstonight.com/javascript/javascript-math-object
  // https://www.tutorialride.com/javascript/javascript-math-object.htm
  // https://www.w3docs.com/learn-javascript/javascript-math-object.html
  // https://www.javascripttutorial.net/javascript-math-object/
  // https://www.programmersought.com/article/1465323523/
  // https://www.educba.com/javascript-math-object/
  // https://www.freecodecamp.org/news/javascript-math-object-explained-with-examples/
  // https://www.simplilearn.com/tutorials/javascript-tutorial/javascript-math-object
  // https://www.journaldev.com/8780/javascript-math-object
  // https://www.studytonight.com/javascript/javascript-math-object
  // https://www.guru99.com/javascript-math-object.html
  // https://www.softwaretestinghelp.com/javascript-math-object/
  // https://www.javatpoint.com/javascript-math
  // https://www.geeksforgeeks.org/javascript-math-object/
  // https://www.tutorialspoint.com/javascript/javascript_math_object.htm
  // https://www.scaler.com/topics/javascript/javascript-math-object/
  // https://www.w3schools.com/js/js_math.asp
  // https://javascript.info/numbers#math
}

{
  // Math.Pow()
  // Math.ceil()
  // Math.floor()
  // Math.trunc()
  // Math.max() / Math.min()
  // --- IGNORE ---
  // Math.sqrt()
  // --- IGNORE ---
  // Math.log() / Math.log2() / Math.log10()
  // --- IGNORE ---
  // Math.sin() / Math.cos() / Math.tan()
  // --- IGNORE ---
  // Math.round()
  // --- IGNORE ---
  // Math.E
  // --- IGNORE ---
  // Math.E
  // --- IGNORE ---
  // let math = Math.E;
  // --- IGNORE ---
  // console.log(math);
  // --- IGNORE ---
  // console.log(Math.E);
  // --- IGNORE ---
  // console.log(Math.PI);
  // --- IGNORE ---
}
