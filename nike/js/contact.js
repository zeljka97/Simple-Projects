
function validacijaForme() {

  
    var text;
    const textreset = "";

    if(document.forma.fporuka.value == "") {
        text = "Niste uneli poruku";
        document.getElementById("tekst").style.color="red";
        document.getElementById("tekst").innerHTML = text;
        document.getElementById("info-tekst4").innerHTML = textreset;
  
        return false;
  
      } else {
        text = "Forma sadrži poruku";
        document.getElementById("info-tekst4").style.color="green";
        document.getElementById("info-tekst4").innerHTML = text;
        text = "Forma sadrži sve parametre";
        
      }
    if(document.forma.femail.value == "") {
        text = "Unesite vašu email adresu";
        document.getElementById("tekst").style.color="red";
        document.getElementById("tekst").innerHTML = text;
  
        document.getElementById("info-tekst3").innerHTML = textreset;
  
        return false;
  
      } else {
        text = "Forma sadrži email adresu";
        document.getElementById("info-tekst3").style.color="green";
        document.getElementById("info-tekst3").innerHTML = text;
    }
    if(document.forma.fage.value == "") {
        text = "Niste uneli godiste";
        document.getElementById("tekst").style.color="red";
        document.getElementById("tekst").innerHTML = text;
  
        document.getElementById("info-tekst1").innerHTML = textreset;
  
        return false;
  
      } else if (document.forma.fage.value < 50 || document.forma.fage.value > 60) {
        text = "Broj mora biti u opstegu";
        document.getElementById("info-tekst2").style.color="red";
        document.getElementById("info-tekst2").innerHTML = text;

        return false;
      }else {
          text= "Uneli ste godiste";
          document.getElementById("info-tekst2").style.color="green";
          document.getElementById("info-tekst2").innerHTML = text;
      }

    if(document.forma.fname.value == "") {
      text = "Niste uneli ime";
      document.getElementById("tekst").style.color="red";
      document.getElementById("tekst").innerHTML = text;

      document.getElementById("info-tekst1").innerHTML = textreset;

      return false;

    } else {
      text = "Forma sadrži ime";
      document.getElementById("info-tekst1").style.color="green";
      document.getElementById("info-tekst1").innerHTML = text;
    }
    
    
   

    
  }