// 25) JavaScript Program to Find the Factors of a Number

let size = parseFloat(prompt("Enter the Size :"));
for (let i = 0; i <= size; i++) {
  if (size % i == 0) {
    console.log(i);
  }
}
