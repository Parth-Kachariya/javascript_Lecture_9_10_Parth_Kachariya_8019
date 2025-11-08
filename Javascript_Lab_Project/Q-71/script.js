// 71) JavaScript Program to Check if An Object is An Array
{
  function isArray(input) {
    if ( Array.isArray(input)) {
      console.log("this is an  array");
    } else {
      console.log("this is not an array");
    }
  }
  isArray([1, 2, 3]); 
  isArray({ a: 1, b: 2 }); 
}
{
  function checkArray(value) {
    if (Array.isArray(value)) {
      console.log("this is an  array");
    } else {
      console.log("this is not an array but an object");
    }
  }
  checkArray([4, 5, 6]);
  checkArray({ x: 10, y: 20 });
}
