// 88) Javascript Program to Generate a Random Number Between Two Numbers
{
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomNumber(1, 10));
  console.log(getRandomNumber(50, 100));

}
{
  function generateRandomNumber(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  }
  console.log(generateRandomNumber(5, 15));
  console.log(generateRandomNumber(20, 30));
  
}