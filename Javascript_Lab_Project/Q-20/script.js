// 20) JavaScript Program to Make a Simple Calculator

{
  let num1 = parseFloat(prompt("Enter No1."));
  let num2 = parseFloat(prompt("Enter No2."));
  console.log("-----Press 1 for Addition-----");
  console.log("-----Press 2 for subtraction-----");
  console.log("-----Press 3 for division-----");
  console.log("-----Press 4 for multiplication-----");
  console.log("-----Press 5 for modulo-----");
  let ch = parseInt(prompt("Enter choice."));
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
