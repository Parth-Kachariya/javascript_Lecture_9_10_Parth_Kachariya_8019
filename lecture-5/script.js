// Javascript Operators

// 3. Comparision Operator(Relational)

/*

Equal to (==)
Strict equal to (===)
Not equal to (!=)
Strict Not equal to (!==)
Greather than(>)
Less than(<)
Greather than or equal to(>=)
Less than or equal to (<=)

*/

{
  console.log("Comparision Operators");
  
  let x = 13;
  let y = 12;
  console.log(x);
  console.log(y);

  console.log(x == y);
  console.log(x === y);

  console.log(x != y);
  console.log(x !== y);

  console.log(x > y);
  console.log(x < y);
  console.log(x >= y);
  console.log(x <= y);
}

// Ternary Operator

// ? , : 

{
  console.log("Ternary Operator");
  

  let x = false

  x ? console.log("Positive") : console.log("Nagative");

}

// Logical Operator

/*

  && operator  END)
  || operator  OR)
/ ! (operator NOT)


*/

{

  console.log("Logical Operators");
  
  let x = true
  let y = false
  let z = true

  console.log(x && y);
  console.log(x && z);
  console.log(y && y);
  console.log(x && y && z);

  console.log(y || y || y);

  console.log(!(x && y));

  console.log(!(x && z));

  console.log(!(x && y) || !(x && x) && (x || z) || (x && x));

  console.log(!(x && y) && !(!(x && x)) && (x || z) && (x && y));

}

// String Operator

/*

+ (concatinating)

+= (assign)

*/

{
  console.log("String Operators");
  let str = "Hello Javascript !"

  let str1 = " Developer "

  console.log(str+str1);

  let str2 = str += str1

  console.log(str2);

}
