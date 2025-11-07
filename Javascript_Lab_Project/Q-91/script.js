// 91) JavaScript Program to Check If a Variable is of Function Type
{
  function isFunction(variable) {
    return typeof variable === "function";
  }

  console.log(isFunction(function () {}));
  console.log(isFunction(123));
}
{
  function checkFunctionType(variable) {
    if (typeof variable === "function") {
      console.log("The variable is of function type.");
    } else {
      console.log("The variable is not of function type.");
    }
  }

  checkFunctionType(function () {});
  checkFunctionType("Hello");
}
