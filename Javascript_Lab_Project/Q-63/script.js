// 63) JavaScript Program to Format the Date
{
  let date = new Date();
  let currentdate = date.getDate();
  let currentmonth = date.getMonth() + 1;
  let currentyear = date.getFullYear();

  let FormatDate = `${currentdate}-${currentmonth}-${currentyear}`;

  console.log(FormatDate);
}
