/* Javascript Statements */

/* Template Literals With Variable Declaration */

// {
//   let name = "kirtan"
//   let str = `Hello my name is ${name}`
//   console.log(str);
// }

/*

if statement
if....else statement
if....else...if statement
switch case statement
nested statement

*/

/* syntax */

/*

if(condition){
  // statement
}

*/

// {

//   let open = false

//   let x = 20
//   let y = 30

//   if(x < y){
//     console.log("shopping cart is available so shooping now.......");
//   }

// }

/* if......else */

/* syntax  */

/*

if(condition){
  // true statement
}else{
    // false statement
}

// if else programs
*/

{

  let number = 20

  if(number % 2 == 0){
    console.log("Even Number");
  }else{
    console.log("Odd Number");
  }

}
  console.log("...................................");




{
  let x=18
  if(x>=18){
    console.log("Eligible for vote");
  }else{
    console.log("Not Eligible for vote");
  }
}
  console.log("...................................");

{
  let temp=40
  if(temp>40){
    console.log("Too Hot");
  }else{
    console.log("Normal Weather");
  }
  console.log("...................................");
}

{
  let number= -10
  if(number>0){
    console.log("Positive Number");
  }else{
    console.log("Negative Number");
  }
}
  console.log("...................................");

{
  let mark="+91"
  if(mark=="+91"){
    console.log("India");
  }else{
    console.log("Not India");
  }
}
  console.log("...................................");

{
  let age = 20;
let hasVoterId = false;

if (age >= 18 && hasVoterId) {
    console.log("You are eligible to vote. so apply f0  r voter id card");
} else {
    console.log("You are not eligible to vote.");
}

}
  console.log("...................................");
{
let year = 2024;

if (year % 4 === 0 ) {
    console.log("Leap year");
} else {
    console.log("Not a leap year");
}

}
  console.log("...................................");
{
  let n = 12;

if (n % 2 === 0 && n % 3 === 0) {
    console.log("Divisible by 2 and 3");
} else {
    console.log("Not divisible by both");
}

}
  console.log("...................................");

{
  let num = 25;

if (num % 5 === 0) {
    console.log("Multiple of 5");
} else {
    console.log("Not a multiple of 5");
}

}

/* if else if else programs */
/* if....else.....if */

/* syntax */

// if(condition){
// }else if(condition){
// }else if(condition){
// }else{
// }

/* Library */


{
  console.log("...................................");
  console.log("If Else If");
  let book = "english";

  if (book == "maths") {
    console.log("maths book available!");
  } else if (book == "chemistry") {
    console.log("chemistry book available!");
  } else if (book == "physics") {
    console.log("physics book available!");
  } else if (book == "drawing") {
    console.log("drawing book available!");
  } else {
    console.log("Book not available");
  }
  console.log("...................................");

  
}
{
  let age=20
  if(age<13){
    console.log("Child");
  }else if(age>=13 && age<20){
    console.log("Teenager");
  }else if(age>=20 && age<60){
    console.log("Adult");
  }else{
    console.log("Senior Citizen");
  }
}
  console.log("...................................");
{
  let age = 17; 

if (age >= 18) {
    console.log("You are eligible to vote.");
} else if (age < 0) {
    console.log("Please enter a valid age.");
} else {
    console.log("You are not eligible to vote yet.");
}

}
  console.log("...................................");
{
  let age = 20; 
let hasVoterId = true;

if (age >= 18 && hasVoterId) {
    console.log("You are eligible to vote.");
} else if (age >= 18 && !hasVoterId) {
    console.log("You need a voter ID card to vote.");
} else {
    console.log("You are not eligible to vote yet.");
}

}
  console.log("...................................");

/* switch case */


{
  console.log("...................................");
  console.log("Switch Case");
  

  let book = "english";

  switch (book) {
    case "maths":
      console.log("maths book available!");
      break;
    case "chemistry":
      console.log("chemistry book available!");
      break;
    case "physics":
      console.log("physics book available!");
      break;
    case "drawing":
      console.log("drawing book available!");
      break;
    case "english":
      console.log("english book available!");
      break;
    default:
      console.log("Book not available");
  }
  console.log("...................................");

}
let book = "social";
