// patterns in js
{
  // 1.
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i == j) {
        document.write(" * ");
      } else {
        document.write(" - ");
      }
    }
    document.write("<br>");
  }
}
document.write("<br>");

{
  // 2.
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (i != j) {
        document.write(" * ");
      } else {
        document.write(" - ");
      }
    }
    document.write("<br>");
  }
}
document.write("<br>");

{
  // 3.
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      document.write(" * ");
    }
    document.write("<br>");
  }
}
document.write("<br>");

{
  // 4.
  for (let i = 5; i >= 0; i--) {
    for (let j = i; j < 5; j++) {
      document.write(" * ");
    }
    document.write("<br>");
  }
}
document.write("<br>");

// {
//   // 5.
//   for (let i = 0; i < 5; i++) {
//     for (let j = 5; j > i; j--) {
//       document.write(" * ");
//     }
//     document.write("<br>");
//   }
// }
document.write("<br>");

// {
//   // 6.
//   for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < i; k++) {
//       document.write(" ");
//     }
//     for (let j = i; j < 5; j++) {
//       document.write("* ");
//     }
//     document.write("<br>");
//   }
// }
document.write("<br>");
{
  // 7.
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      if ((i == 0 || i == 4) || (j == 0 || j == 4)) {
        document.write(" * ");
      }
      else{
        document.write(" ");

      }
    }
    document.write("<br>");
  }
}
document.write("<br>");
