// 62) JavaScript Program to Check Leap Year
{
  let date = new Date();
  date.setFullYear(prompt("Enter Year"));
  console.log(date);

  if (date % 4 == 0) {
    console.log("\n year is leap year..");
  }
  else{
    console.log("\nyear is Not leap year..");

  }
}
