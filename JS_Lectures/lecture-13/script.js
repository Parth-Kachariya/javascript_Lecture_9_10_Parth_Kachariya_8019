
// Javascript Regular Expression

// Regex

// {
//   let regex = /^a....s$/

//   let result = regex.test('apples')

//   console.log(result);
  
// }

// {

  //  []

//   let regex = /[abc]/
//   let regex1 = /[A-Z]/

//   let result = regex.test("apple")

//   let result1 = regex1.test("pAples")

//   console.log(result);

//   console.log(result1);

// }

// Regular Expression

// Mobile Number

// {

//   function validateNum(num){
//     let mobileRegex = /^\+?[1-9][0-9]{7,14}$/
//     let result = num.match(mobileRegex)

//     if(result){
//       console.log("mobile number is valid.");
//     }else{
//       let num = prompt("Enter a valid mobile number")
//       validateNum(num)
//     }
//   }

//   let number = prompt("Enter a valid num")
//   validateNum(number)

// }
// Email  regex

// {

//   function validate_email(num){
//     let emailRegex =/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     let result = num.match(emailRegex)

//     if(result){
//       console.log("Email  is valid.");
//     }else{
//       let num = prompt("Enter a valid Email")
//       validate_email(num)
//     }
//   }

//   let number = prompt("Enter a valid email")
//   validate_email(number)

// }


// password  regex

{

  function validate_pass(num){
    // let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/
    let passwordRegex = /^[\S]{8,100}$/
    let result = num.match( passwordRegex)

    if(result){
      console.log("Password  is strong.");
    }else{
      let num = prompt("Enter a Strong Password")
      validate_pass(num)
    }
  }

  let number = prompt("Enter a  Password")
  validate_pass(number)

}
