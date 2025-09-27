// 90) JavaScript Program to Validate An Email Address
{
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
  const email = "xyz345@gmail.com";
  console.log(validateEmail(email));
}
console.log("----------------------------------");

{
  function validate_email(num) {
    let emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let result = num.match(emailRegex);
    if (result) {
      console.log("Email  is valid.");
    } else {
      console.log("Email is not valid.");
    }
  }
}
validate_email("xyz345@gmail.com");
