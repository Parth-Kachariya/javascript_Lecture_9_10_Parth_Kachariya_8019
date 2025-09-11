// 27) JavaScript Program to Guess a Random Number
{
  let math =Math.floor( Math.random() * 10);

  let Number=parseInt(prompt("Enter Number in 1 to 10:"))

  if(Number===math){
    console.log("right number: ",Number);
    
  }
  else{

    console.log("Wrong number ! correct number is:",math);
    
  }
}