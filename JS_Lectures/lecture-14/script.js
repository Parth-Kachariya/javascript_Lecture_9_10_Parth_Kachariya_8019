/* Javascript String Methods */

/* String.replace() */

// replace(pattern, replacement)
// replaceAll(pattern, replacement)

{
  //   {
  //     i (Case-Insensitive) flag
  //      Ye flag regular expression ko case-insensitive banata hai.

  //        Matlab pattern match hoga upper case ya lower case ka farak nahi padega.

  //        Jaise /abc/i match karega: "abc", "AbC", "ABC" aur sab combinations.
  //      example:
  //   }
  {
    let string = "Welcome to javascript world and learn javascript language";
    let regex = /javascript/i;
    let output = string.replace(regex, "html");
    console.log(output);
  }

  // {
  //   g (Global) flag
  //   Ye flag ensure karta hai ki regular expression string ke andar saare matches dhoondhe, sirf pehle match par rukta nahi.

  // Agar g flag nahi lagate, to methods jaise String.prototype.match() ya RegExp.prototype.exec() sirf pehla match return karenge.

  // Aur jab String.prototype.replace() ke saath use karte ho, to g flag lagane par saare occurrences replace honge, sirf pehla nahi.
  // }
  {
    let str = "ABC, Abc, aBc ,abC ,abc";
    let regex = /abc/g;
    let result = str.replaceAll(regex, "JS");
    console.log(result);
  }
  {
    let str = "I think Ruth's cat is cuter than your cat!";

    let regex = /cat/g;

    let result1 = str.replaceAll(regex, "dog");

    console.log(result1);
  }

  // g&i  flag marge
  {
    let str="ABC, Abc, aBc, abC, abc "
    let regex = /abc/gi;
     let result = str.replaceAll(regex, "JS");
    console.log(result);


  }
}
