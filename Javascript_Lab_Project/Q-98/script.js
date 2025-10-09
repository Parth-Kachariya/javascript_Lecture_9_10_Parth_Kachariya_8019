// 98) JavaScript Program to Check if a Number is Float or Integer
{
  function int(value) {
    if (Number.isInteger(value)) {
      console.log("This Number IS Integer");
    } else {
      console.log("This Number IS Float");
    }
  }
  int(12.4);
  console.log("-----------------------------");
  // way 2
  function values(Number) {
    if (Number % 1 === 0) {
      console.log("This Number IS Integer");
    } else {
      console.log("This Number IS Float");
    }
  }
  values(12);
}
