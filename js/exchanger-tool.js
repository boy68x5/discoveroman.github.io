   var currency;
   var amount;
   var rate;
   var result;
   
   
   function exchange() {
      var currency = document.form.cur.value;
      var amount = document.form.amo.value;
      
      if (currency === "USD") {
        rate = 0.38;  
      } else if (currency === "EUR") {
        rate = 0.41; 
      }
      
      var result = amount * rate;
      alert("Equivalent in OMR: " + result);
    }