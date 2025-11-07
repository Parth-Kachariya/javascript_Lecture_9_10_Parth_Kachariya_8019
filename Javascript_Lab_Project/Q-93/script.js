// 93) JavaScript Program to Pass Parameter to a setTimeout() Function
{
  function setTime(name) {
    console.log("Hello, " + name + ".........!");
    console.log(`welcome to , ${name} world .........!`);
  }
  setTimeout(setTime, 1000, "javascript");
  setInterval(setTime ,2000 ,"JS Learner");
}
{
  function setTime(name) {
    console.log("Hello, " + name + ".........!");
    console.log(`welcome to , ${name} world .........!`);
  }
  setInterval(setTime ,2000 ,"JS Learner");
}