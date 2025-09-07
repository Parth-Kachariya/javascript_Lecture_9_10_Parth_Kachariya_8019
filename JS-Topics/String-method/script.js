// ......String Method......
// JavaScript String
//  The String object is used to represent and manipulate a sequence of characters.

// 1. lastIndexOf(searchString, position)
console.log("---------------------------------");

// {
// Use: String me kisi word ka last position batata hai.

// Example:
{
  let str = "Hello JavaScript,Users";
  console.log(str.lastIndexOf("o"));
  console.log(str.lastIndexOf("o", 4));
  console.log("---------------------------------");
}
// }

// 2. repeat()
{
  // Use: String ko repeat karta hai jitni baar chaho.

  // Example:
  {
    let text = "Phk";
    console.log(text.repeat(3));
    console.log("---------------------------------");
  }
}

// 3. search()
{
  // Use: String me kisi word ya pattern ka position find karta hai.
  // Example:
  {
    let str = "JavaScript is programming language";
    //0123456789012345678901234567890123
    console.log(str.search("language"));
    console.log("---------------------------------");
  }
}

// 4. toLowerCase()
{
  // Use: Pure string ko small letters me convert karta hai.
  // Example:
  {
    let text = "PARTH KACHARIYA";
    console.log(text.toLowerCase());
    console.log("---------------------------------");
  }
}
// 5. toString()
{
  // Use: Number ya object ko string me badalta hai.
  // Example:
  {
    let num = 123;
    console.log(num.toString());
    console.log("---------------------------------");
  }
}
// 6. toUpperCase()
{
  // Use: Pure string ko capital letters me convert karta hai.
  // Example:
  {
    let text = "parth kachariya";
    console.log(text.toUpperCase());
  }
  console.log("---------------------------------");
}
// 7. trim()
{
  // Use: String ke aage-piche ka extra space hataata hai.
  // Example:
  {
    let text = "    parth h.k.    ";
    console.log(text.trim());
  }
  console.log("---------------------------------");
}

// 8. trimEnd()
{
  // Use: Sirf end ka space hataata hai.
  // Example:
  {
    let text = "    parth h.k.    ";
    console.log(text.trimEnd());
  }
  console.log("---------------------------------");
}
// 9. trimStart()
{
  // Use: Sirf starting ka space hataata hai.
  // Example:
  {
    let text = "    parth h.k.    ";
    console.log(text.trimStart());
  }
  console.log("---------------------------------");
}
// 10. valueOf()
{
  // Use: String object ka original value deta hai.
  // Example:
  {
    let str = new String("parth");
    console.log(str.valueOf());
  }
  console.log("---------------------------------");
}
