// Javascript Date() Object

{
  let date = new Date();

  console.log(date);
}

// Date.now()
/* current date aur time ka timestamp return karta hai.
Yeh timestamp 1 January 1970 (UTC) se ab tak ke milliseconds hota hai.*/yy5
{
  let date = Date.now();

  console.log(date);
}

{
  // use for  find current   date and time
  let date = new Date();

  console.log(date.getMonth());
  console.log(date.getDate());
  console.log(date.getFullYear());
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  console.log(date.getMilliseconds());
}

{
  // use for set  date and time
  let day = new Date();

  day.setMonth(5);
  day.setFullYear(2024);
  day.setDate(16);
  day.setHours(12);
  day.setSeconds(40);
  day.setMinutes(20);
  console.log(day);
}
