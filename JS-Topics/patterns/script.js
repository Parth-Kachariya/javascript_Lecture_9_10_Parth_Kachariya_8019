// patterns in js
{
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
  for (let i = 0; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      document.write(" * ");
    }
    document.write("<br>");
  }
}
document.write("<br>");

{
  for (let i = 5; i >= 0; i--) {
    for (let j = i; j < 5; j++) {
      document.write(" * ");
    }
    document.write("<br>");
  }
}
document.write("<br>");


