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

*/

{

  let number = 20

  if(number % 2 == 0){
    console.log("Even Number");
  }else{
    console.log("Odd Number");
  }

}


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
