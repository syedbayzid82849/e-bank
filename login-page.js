document.getElementById('login-btn').addEventListener("click", 
    function( event ){

      event.preventDefault()

      const mubileNumber = document.getElementById("mubile-number").value;
      
      const pin =document.getElementById('pin').value;
      const convertedPin = parseInt(pin);

      if(mubileNumber.length === 11 ){
        if(convertedPin===8284){
          window.location.href ="./second-page.html";
        }
        else{
          console.log('not');
        }
      }
      else{
        alert('Invalid Mubile Number or Pin Number');
      }



    });
