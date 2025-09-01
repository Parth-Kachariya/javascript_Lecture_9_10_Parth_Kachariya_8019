
// 5) JavaScript Program to Swap Two Variables
{
  let a = 10;
  let b = 20;
  console.log(a, b);
  // Using third variable
  let temp = a;
  a = b;
  b = temp;
  console.log("a: " + a + " b: " + b);
  // Without using third variable

  a = a + b;
  b = a - b;
  a = a - b;
  console.log("a: " + a + " b: " + b);
}
