// 86) JavaScript Program to Set a Default Parameter Value For a Function
{
  function Defaultpara(name = "PARTH kachariya") {
    return  console.log("Hello " + name);
    // return `hello ${name}`;
    // return result;
  }
  Defaultpara();

  // console.log(Defaultpara());
}
console.log("-----------------------------------");

{
  let name = (name = "parth kachariya") => {
    let result = console.log("hi " + name);
    return result;
  };
  name();
}
