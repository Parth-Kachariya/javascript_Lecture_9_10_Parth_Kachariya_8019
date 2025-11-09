
/* Javascript Form Validation */

/* plain Js Validation */

/* javascript EventListerners */

/* What is addEventListners */

// addEventListener() is a Javascript method used to attech an event handler to an Element.

// syntax

// addEventListener(event , function , useCapture)

const button = document.getElementById('btn')

button.addEventListener("click" , function(){
  alert("Button was clicked!!!!")
})


/* passing data to a function */


button.addEventListener("mouseover" , () => {
  console.log("Mouse Over Effect!!");
  document.body.style.backgroundColor = "red"

})
button.addEventListener("click" , () => {
  console.log("Button Clicked!!")
  document.body.style.backgroundColor = "lightblue"
})
button.addEventListener("mouseout" , () => {
  console.log("Mouse Out Events!!!");
  document.body.style.backgroundColor = "yellow"
})

function showMessage(name){
  console.log(`Hello,  ${name}`);
}

document.getElementById("btn").addEventListener("click" , function(){
  showMessage("Javascript!!!")
})

