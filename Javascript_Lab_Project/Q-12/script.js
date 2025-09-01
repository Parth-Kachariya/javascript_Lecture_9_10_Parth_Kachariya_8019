
// 12) JavaScript Program to Find the Largest Among Three Numbers
{
  let a = 10;
  let b = 20;
  let c = 15;
  if (a >= b && a >= c) {
    console.log(a + " is the largest number");
  } else if (b >= a && b >= c) {
    console.log(b + " is the largest number");
  } else {
    console.log(c + " is the largest number");
  }
  // 2
  if(a>b){
    if(a>c){
      console.log(a+" is the largest number");
    }
    else{
      console.log(c+" is the largest number");
    }
  }
  else{
    if(b>c){
      console.log(b+" is the largest number");
    }
    else{
      console.log(c+" is the largest number");
    }
  }
}
