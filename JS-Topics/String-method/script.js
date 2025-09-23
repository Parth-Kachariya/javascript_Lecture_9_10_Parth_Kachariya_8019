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
/* 11. split(separator, limit) 
  Use: Splits a string into an array by the given separator. */
{
  let str = "kachariya";
  console.log(str.split(""));
  console.log(str.split("", 4));
  console.log("---------------------------------");
}
/* 12. startsWith(searchString, position) 
   Use: Checks if a string starts with the given substring. */
{
  let str = "parth Kachariya";
  console.log(str.startsWith("parth"));
  console.log(str.startsWith("Kachariya", 6));
  console.log("---------------------------------");
}
// 13. substring(start, end)
// Use: Returns part of a string between start and end indexes.
{
  let str = "kachariya";
  console.log(str.substring(1, 5));
  console.log("---------------------------------");
}
/* 14. slice(start, end) 
  Use: Extracts part of a string and returns it. */
{
  let str = "parth Kachariya";
  console.log(str.slice(0, 8));
  console.log(str.slice(-9));
  console.log("---------------------------------");
}
/*15. replaceAll(searchValue, replaceValue)
Use: Replaces all matches of regex/string */
{
  let str = "I think Ruth's Dog is cuter than your Dog!";
  let regex = /Dog/g;

  let result = str.replaceAll(regex, "cat");
  console.log(result);
  console.log("---------------------------------");
}
/* 16.  replace(searchValue, replaceValue) 
use:Replaces part of the string matched by regex*/
{
  let str = "I think Ruth's Dog is cuter than your Dog!";
  let regex = /Dog/i;
  let result = str.replace(regex, "cat");
  console.log(result);
  console.log("---------------------------------");
}
/* 17. at(index) 
   Use: Returns the character at the given index (supports negative index). */
{
    let str = "parth Kachariya";
    console.log(str.at(3));
    console.log(str.at(-1));
    console.log("---------------------------------");
}
/* 18. charAt(index) 
   use: Returns the character at the given index (does not support negative index). */
{
    let str = "parth Kachariya";
    console.log(str.charAt(3));
    console.log(str.charAt(10));
}
/* 19. charCodeAt(index) 
  use Returns the UTF-16 code of the character at the given index. */
{
    let str = "parth Kachariya";
    console.log(str.charCodeAt(0));
    console.log(str.charCodeAt(7));
    console.log("---------------------------------");
}
/* 20. concat(str1, str2, ...) 
   Use: Joins two or more strings into one. */
{
    let str1 = "Parth";
    let str2 = "Kachariya";
    console.log(str1.concat(" ", str1));
    console.log(str1.concat(" ", str2));
    console.log("---------------------------------");
}
/* 21. includes(searchString, position) 
   Use: Checks if the string contains the given substring. */
{
    let str = "parth Kachariya";
    console.log(str.includes("pa"));
    console.log(str.includes("Kachariya", 6));
    console.log(str.includes("Kachariya", 10));
    console.log("---------------------------------");
}
/* 22. endsWith(searchString, endPosition) 
   Use: Checks if the string ends with the given substring. */
{
    let str = "parth Kachariya";
    console.log(str.endsWith("Kachariya"));
    console.log(str.endsWith("parth", 5));
    console.log(str.endsWith("parth", 4));
    console.log("---------------------------------");
}
/* 23. indexOf(searchString, position) 
   Use: Returns the first index of the given substring, or -1 if not found. */
{
    let str = "parth Kachariya";
    console.log(str.indexOf("a"));
    console.log(str.indexOf("p",5 ));
    console.log("---------------------------------");
}

/* 24. padStart(targetLength, padString) 
   Use: Pads string at the beginning to reach the target length. */
{
    let str = "parth";
    console.log(str.padStart(15, "_-_-"));
    console.log("---------------------------------");
}
/* 25. padEnd(targetLength, padString) 
   Use: Pads string at the end to reach the target length. */
{
    let str = "parth";
    console.log(str.padEnd(15, "_-_-"));
    console.log("---------------------------------");
}
