// Javascript Number() Object in Javascript

{
  let num = new Number(10);
  let num1 = Number(20);

  console.log(typeof num);
  console.log(typeof num1);
}

// isFinite()

{
  let infinite = Number.isFinite(20 / 10);

  console.log(infinite);
}

{
  let inti = Number.isInteger(10.43);

  let nun = Number.isNaN("box" / 10);

  console.log(inti);

  console.log(nun);
}

//Number.prototype.toExponential()

{
  let value = 2600000000;

  let Exponential = value.toExponential(0);
  let Exponential1 = value.toExponential(10);

  console.log(Exponential);
  console.log(Exponential1);
}

// Number.prototype.toFixed()

{
  let value = 27.566987;

  let fix = value.toFixed();

  console.log(fix);
}

// toPrecision()

{
  let value = 200.456;

  let pre = value.toPrecision(10);

  console.log(pre);
}

// toString()

{
  let value = 200;

  let str = value.toString();

  console.log(str);
}
// isSafeInteger()
{
  // A safe integer is any integer that can be exactly represented as a double-precision floating-point number in JavaScript without rounding issues.
  // Number.isSafeInteger() method in JavaScript is used to check whether a given value is a safe integer or not.

  console.log(Number.isSafeInteger(10)); // //T
  console.log(Number.isSafeInteger(11.5)); // //F
  let num1 = 25;
  const num2 = 80.80;

  console.log(Number.isSafeInteger(num1));  //// true
  console.log(Number.isSafeInteger(num2)); //// true
}
// parseFloat()
{
}
// parseInt()
{
}
