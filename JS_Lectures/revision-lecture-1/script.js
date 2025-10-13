// revision lecture
{
  function sum() {
    num1 = Number(document.getElementById("num1").value);
    num2 = Number(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("output").innerHTML = result;
    // let h1 = (document.getElementById("output"));
    // h1.innerHTML=result
    // h1.style.color = "red";
    // h1.style.backgroundColor = "black";
  }
}
// map method
{
  let arr = [20, 40, 60, 80];
  let result = arr.map((value) => value % 2);
  console.log(result);
}
// setTimeout(reference , timing(millisenconds))
{
  function add() {
    console.log(100);
  }
  let result = setTimeout(add, 1000);

  // clearTimeout(result)

  function val() {
    console.log(100);
  }
  let result1=setInterval(val , 1000)
  clearInterval(result1)
}
{
  let count = 10

const id = setInterval(() => {
  document.getElementById("title").innerHTML = count--
  if(count < 0) clearInterval(id)
} , 1000)
}