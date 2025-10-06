
// Javascript Functions and Function Expression

{
  function world(){
    console.log("Hello World!!!");
  }
  
  world()
}

{
  // Function with Expression
  
  let funcex = function(){
    console.log(Math.random());
  }
  
  funcex()
}

{
  // Javascript Callback Function

  function add(func){
    console.log("Hello World!!");
    func()
  }

  function sum(){
    console.log(20+20);
  }

  add(sum)
}

{
  // Timing Function

  // Javascript SetTimeout()
  // after 3 seconds run callback function


  function print(){
    console.log("Hello Javascript!!");
    
  }

  let setTimeoutId = setTimeout(print , 3000)

  console.log(setTimeoutId);

  console.log("setTimeout Function");
  
}

{
  // every 1 seconds

  // print  repeatly after 1 seconds

  function timeShow(){

    let date = new Date()

    let time = date.toLocaleTimeString();

    console.log(time);
    
    setTimeout(timeShow , 1000)
  }

  timeShow()
}


{
 // javascript clearTimeout()

  // let count = 0

  // function increaseTime(){
  //   count+=1
  //   console.log(count)
  // }

  // let id = setTimeout(increaseTime , 2000)

  // clearTimeout(id)

  // console.log("stop timing function");
  
}

{
  // javascript setInterval() Function


  // function greet(){
  //   console.log("Hello");
  // }

  // let id = setInterval(greet , 2000)

  // console.log(id);
  
}
