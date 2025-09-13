// 20) JavaScript Program to Make a Simple Calculator

{
  let num1 = parseFloat(prompt("Enter No1."));
  let num2 = parseFloat(prompt("Enter No2."));

  let ch = parseInt(prompt("\n====================\n-----Press 1 for Addition-----\n-----Press 2 for subtraction-----\n-----Press 3 for division-----\n-----Press 4 for multiplication-----\n-----Press 5 for modulo-----\n====================\n\n\nEnter choice."));
  switch (ch) {
    case 1:
        console.log("'+'Addition :",num1,num2,num1+num2);

      break;
      case 2:
        console.log("'-'subtraction :",num1,num2,num1-num2);

      break;
      case 3:
        console.log("'*'multiplication :",num1,num2,num1*num2);

      break;
      case 4:
        console.log("'/'division :",num1,num2,num1/num2);

      break;
      case 5:
        console.log("'%'modulo :",num1,num2,num1%num2);

      break;
      default:
         console.log("--------!! Invalid Number please Try Again !!--------");

      
         
  }
}
