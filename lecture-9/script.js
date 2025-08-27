/* Javascript Loops and break and continue statements */

/* 
  while loop
  do-while loop
  for loop
  for-in loop
  for-of loop
*/

/* while loop */

/* syntax */

// while(condition){
//print statement
// after thought
// }
// while loop example
console.log("while loop");
console.log("...............................");
{
  let num = 0;

  while (num < 10) {
    console.log(`while loop ${num}`);
    console.log("js");
    num++;
  }
}
console.log("...............................");
{
  let num = 0;

  while (num < 10) {
    if (num % 2 == 0) {
      console.log(num);
    }
    num++;
  }
}
console.log("...............................");
{
  let num = 0;

  while (num < 10) {
    if (num % 2 != 0) {
      console.log(num);
    }
    num++;
  }
}
console.log("...............................");
{
  let num = 0;

  while (num < 20) {
    if (num % 2 == 0 && num % 4 == 0) {
      console.log(num);
    }
    num++;
  }
}
console.log("...............................");
{
  let num = 0;

  while (num < 10) {
    if (num % 2 != 0) {
      console.log(num);
    }
    num++;
  }
}
console.log("...............................");

/* do-while loop */

/* syntax */

// do{
// // print statement
// // after thought
// }while(condition)

// {
//   let num = 0

//   do{
//     console.log(`do-while loop ${num}`);
//     num++;
//   }while(num > 5)
// }

/* for loop */

/* syntax */

// for(initilization , condition , afterthought){
// print statement
// }
console.log("...............................");

{
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
console.log("...............................");

{
  for (let i = 10; i > 0; i--) {
    console.log(i);
  }
}
console.log("...............................");
{
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
console.log("...............................");
{
  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    console.log(i);

    sum = sum + i;
  }

  console.log("sum of 1 to 10 number:", sum);
}
console.log("...............................");
{
  let num = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i}=`, i * num);
  }
}
console.log("...............................");
{
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i);
    }
  }
}
console.log("...............................");
{
  let sum=0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(i);
      sum=sum+i;
    }
  }
      console.log("sum of numbers divisible by 3 and 5 (1–100) :",sum);

}
console.log("...............................");
{
  let sum=0;
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
      sum+=i;
    }
  }
      console.log("sum of even number (0 to 20) :",sum);
}
