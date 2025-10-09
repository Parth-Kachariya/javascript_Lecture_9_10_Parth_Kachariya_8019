//85) JavaScript Program To Check If A Variable Is undefi ned or null
{
  function values(value) {
    if (value == null) {
      console.log("Variable is null or undefined");
    } else {
      console.log("Variable is NOT  null or NOT undefined");
    }
  }
  console.log("---------------------------------");

  values();
  console.log("---------------------------------");

  values("ajay");
  console.log("---------------------------------");

  values(12);
  console.log("---------------------------------");
}
