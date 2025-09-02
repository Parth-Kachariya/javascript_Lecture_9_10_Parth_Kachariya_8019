
/* Javascript String Methods */

// The String object is used to represent and manipulate a sequence of characters.

// at(index)

// {
//   let str = "This is Javascript String Method."
//          //  012345678901234567890123456789012
//          //  123456789012345678901234567890123

//   let atmethod = str.at(0)
//   let atmethod1 = str.at(20)
//   let atmethod2 = str.at(-50)

//   console.log(atmethod);
//   console.log(atmethod1);
//   console.log(atmethod2);

// }


// charAt(index)


// {
//   let str = "This is Javascript String Method."

//   let charAtMethod = str.charAt(0)
//   let charAtMethod1 = str.charAt(20)
//   let charAtMethod2 = str.charAt(33)

//   console.log(charAtMethod);
//   console.log(charAtMethod1);
//   console.log(charAtMethod2);
// }


// charCodeAt(index)

// {
//   let str = "This is Javascript String Method."

//   let charCodeAtMethod = str.charCodeAt(0)
//   let charCodeAtMethod1 = str.charCodeAt(25)

//   console.log(charCodeAtMethod);
//   console.log(charCodeAtMethod1);
// }


// concat(str1)
// concat(str1, str2)
// concat(str1, str2, /* …, */ strN)

// {
//   let str1 = "Hello"
//   let str2 = "World"
//   let str3 = "!"

//   let str = str1.concat(str2 , str3)

//   console.log(str);
// }


// includes(searchString)
// includes(searchString, position)


// {
//   let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not faithfull."

//   let includesMethod = str.includes("My" , 10)
//   let includesMethod1 = str.includes("My" , -1)
//   let includesMethod2 = str.includes("My")

//   console.log(includesMethod);
//   console.log(includesMethod1);
//   console.log(includesMethod2);
// }


// indexOf(searchString)
// indexOf(searchString, position)

{
   let str = "My Cat very cute but my dog is danger but Dog very honest but my cat is not honest."

   let indexOfMethod = str.indexOf("Dog")
   let indexOfMethod1 = str.indexOf("T")
   let indexOfMethod2 = str.indexOf("M" , 100)

   console.log(indexOfMethod);
   console.log(indexOfMethod1);
   console.log(indexOfMethod2);
}


// self Learning Methods

// lastIndexOf()
// repeat()
// search()
// toLowerCase()
// toString()
// toUpperCase()
// trim()
// trimEnd()
// trimStart()
// valueOf()



/* JavaScript String
    -> The String object is used to represent and manipulate a sequence of characters.*/

// ========================= //
// JavaScript String Methods //
// ========================= //

/* 1. at(index) 
   -> Returns the character at the given index (supports negative index). */
{
    console.log("------ at(index) --------");
    let str = "Parth kachariya";
    console.log(str.at(3));
    console.log(str.at(-1));
}

/* 2. charAt(index) 
   → Returns the character at the given index (does not support negative index). */
{
    console.log("------ charAt(index) --------");
    let str = "parth Kachariya";
    console.log(str.charAt(3));
    console.log(str.charAt(10));
}

/* 3. charCodeAt(index) 
   → Returns the UTF-16 code of the character at the given index. */
{
    console.log("------ charCodeAt(index) --------");
    let str = "Parth Kachariya";
    console.log(str.charCodeAt(0));
}

/* 4. codePointAt(index) 
   → Returns the Unicode code point value at the given index. */
{
    console.log("------ codePointAt(index) --------");
    let str = "Parth Kachariya";
    console.log(str.codePointAt(5));
}

/* 5. concat(str1, str2, ...) 
   -> Joins two or more strings into one. */
{
    console.log("------ concat() --------");
    let str1 = "Parth";
    let str2 = "Kachariya";
    console.log(str1.concat(" ", str2));
}

/* 6. includes(searchString, position) 
   -> Checks if the string contains the given substring. */
{
    console.log("------ includes() --------");
    let str = "Parth Kachariya";
    console.log(str.includes("parth"));
    console.log(str.includes("Kachariya", 10));
}

/* 7. endsWith(searchString, endPosition) 
   -> Checks if the string ends with the given substring. */
{
    console.log("------ endsWith() --------");
    let str = "parth Kachariya";
    console.log(str.endsWith("Kachariya"));
    console.log(str.endsWith("parth", 5));
}

/* 8. indexOf(searchString, position) 
   -> Returns the first index of the given substring, or -1 if not found. */
{
    console.log("------ indexOf() --------");
    let str = "parth Kachariya";
    console.log(str.indexOf("a"));
    console.log(str.indexOf("a", 5));
}

/* 9. lastIndexOf(searchString, position) 
   -> Returns the last index of the given substring, or -1 if not found. */
{
    console.log("------ lastIndexOf() --------");
    let str = "parth Kachariya";
    console.log(str.lastIndexOf("a"));
    console.log(str.lastIndexOf("a", 10));
}

/* 10. padStart(targetLength, padString) 
   -> Pads string at the beginning to reach the target length. */
{
    console.log("------ padStart() --------");
    let str = "parth";
    console.log(str.padStart(10, "."));
}

/* 11. padEnd(targetLength, padString) 
   -> Pads string at the end to reach the target length. */
{
    console.log("------ padEnd() --------");
    let str = "parth";
    console.log(str.padEnd(15, "."));
}

/* 12. repeat(count) 
   -> Returns a string repeated the given number of times. */
{
    console.log("------ repeat() --------");
    let str = "parth ";
    console.log(str.repeat(5));
}

/* 13. replace(pattern, replacement) 
   -> Replaces the first match of pattern with replacement. */
{
    console.log("------ replace() --------");
    let str = "parth likes running.";
    console.log(str.replace("running", "driving"));
}

/* 14. replaceAll(pattern, replacement) 
   -> Replaces all matches of pattern with replacement. */
{
    console.log("------ replaceAll() --------");
    let str = "parth is smart. parth is hardworking.";
    console.log(str.replaceAll("parth", "prajapati"));
}

/* 15. slice(start, end) 
   -> Extracts part of a string and returns it. */
{
    console.log("------ slice() --------");
    let str = "parth Kachariya";
    console.log(str.slice(0, 9));
    console.log(str.slice(-9));
}

/* 16. split(separator, limit) 
   -> Splits a string into an array by the given separator. */
{
    console.log("------ split() --------");
    let str = "parth";
    console.log(str.split(""));
    console.log(str.split("", 4));
}

/* 17. startsWith(searchString, position) 
   -> Checks if a string starts with the given substring. */
{
    console.log("------ startsWith() --------");
    let str = "parth Kachariya";
    console.log(str.startsWith("parth"));
    console.log(str.startsWith("Kachariya", 6));
}

/* 18. substring(start, end) 
   -> Returns part of a string between start and end indexes. */
{
    console.log("------ substring() --------");
    let str = "parth";
    console.log(str.substring(1, 5));
}

/* 19. toUpperCase() 
   -> Converts string to uppercase. */
{
    console.log("------ toUpperCase() --------");
    let str = "parth";
    console.log(str.toUpperCase());
}

/* 20. toLowerCase() 
   -> Converts string to lowercase. */
{
    console.log("------ toLowerCase() --------");
    let str = "PARTH";
    console.log(str.toLowerCase());
}

/* 21. trim() 
   -> Removes whitespace from both ends of a string. */
{
    console.log("------ trim() --------");
    let str = "     parth Kachariya   ";
    console.log(str.trim());
}

/* 22. trimStart() 
   -> Removes whitespace from the start of a string. */
{
    console.log("------ trimStart() --------");
    let str = "   parth Kachariya   ";
    console.log(str.trimStart());
}

/* 23. trimEnd() 
   -> Removes whitespace from the end of a string. */
{
    console.log("------ trimEnd() --------");
    let str = "   parth Kachariya   ";
    console.log(str.trimEnd());
}

