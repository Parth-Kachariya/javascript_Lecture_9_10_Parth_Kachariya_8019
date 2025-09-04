/* Javascript String Methods */

// more string method

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

// String.Slice() / String.subString()

// slice(indexStart)
// slice(indexStart, indexEnd)

// substring(indexStart)
// substring(indexStart, indexEnd)

{
  let str = "This is Javascript String Method! and very important";
          // 0123456789012345678901234567890123456789012345678901

  let slice1 = str.slice(20);
  let slice2 = str.slice(-20);
  let slice3 = str.slice(0, 27);
  let slice4 = str.slice(-15, 20); // minus value ma kae print nahi thay

  let substring1 = str.substring(0);
  let substring2 = str.substring(-1);
  let substring3 = str.substring(20, -30);

  console.log(slice1);
  console.log(slice2);
  console.log(slice3);
  console.log(slice4);
  console.log(substring1);
}
