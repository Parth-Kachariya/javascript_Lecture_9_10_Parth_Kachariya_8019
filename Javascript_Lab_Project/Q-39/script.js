// 39) JavaScript Program to Convert the First Letter of a String into UpperCase
{
  let str = "pARTH";
  let result = str.charAt(0).toUpperCase() + str.slice(1);

  console.log("Original String: " + str);
  console.log("After Capitalizing: " + result);
}
{
  let str = "hello world";

  let result = str.replace(str[0], str[0].toUpperCase());

  console.log("After Capitalizing: " + result);
}
