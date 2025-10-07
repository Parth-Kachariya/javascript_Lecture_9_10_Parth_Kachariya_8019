
    let quote = [
      {author:' Zaverchand Meghani(ઝવેરચંદ મેઘાણી)' , text:'બાળકને સારું ખાવાનું, પાણી અને સ્વચ્છ હવા જ શ્રેષ્ઠ દવા છે.'},
      {author:"Mahatma Gandhi (મહાત્મા ગાંધી)" , text:"તમે જે બદલાવ દુનિયામાં જોવા માંગો છો તે બનો."},
      {author:"Kavi Kalapi (કવિ કલાપી)" , text:"હા ! પસ્તાવો – વિપુલ ઝરણું સ્વર્ગથી ઊતર્યું છે, પાપી તેમાં ડૂબકી દઈને પુણ્યશાળી બને છે!"},
      {author:"Kavi Narmad (કવિ નર્મદ)" , text:"ડગલું ભર્યું કે ના હઠવૂં ના હઠવૂં"},
      {author:"Dalai Lama (દલાઈ લામા)" , text:"ખુશી તૈયાર મળતી નથી; તે તમારા પોતાના કાર્યોમાંથી આવે છે."},
      {author:"Winston Churchill (વિન્સ્ટન ચર્ચિલ)" , text:"સફળતા અંતિમ નથી, નિષ્ફળતા ઘાતક નથી: જે ગણતરી કરે છે તે આગળ વધવાની હિંમત છે."}
    ];

    function generateQuote() {
      let randomIndex = Math.floor(Math.random() * quote.length);
      document.getElementById("quote-text").innerHTML = quote[randomIndex].text;
      document.getElementById("quote-author").innerHTML = "- " + quote[randomIndex].author;
    }

    function addQuote() {
      let text = document.getElementById("new-text").value.trim();
      let author = document.getElementById("new-author").value.trim();
      
      if(text && author){
        quote.push({text:text, author:author});
        alert("Quote Added Successfully!");
        document.getElementById("new-text").value = "";
        document.getElementById("new-author").value = "";
      } else {
        alert("Please enter both Quote and Author.");
      }
    }

