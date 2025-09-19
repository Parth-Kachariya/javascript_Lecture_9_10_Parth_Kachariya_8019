// 17) JavaScript Program to Print the Fibonacci Sequence

{
  let n = 6;
  let a = 0,
    b = 1; // first two numbers

  console.log(a);
  console.log(b);

  for (let i = 2; i < n; i++) {
    let c = a + b; // next number
    console.log(c);
    a = b; // shift next number
    b = c;
  }
}
