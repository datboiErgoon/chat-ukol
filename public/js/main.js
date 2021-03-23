let socket = io();
const psaciBox = document.getElementById("psaci-box");
const zonaZpravy = document.getElementById("zona-zpravy");
const poslat = document.getElementById("poslat");


socket.on('message-from-others', function(zprava){
    let html = '<div class="zprava-box ostatnich-zprava-box">' +
    '<div class="zprava zprava-jinych"> ' + zprava + ' </div>' +
    '<div class="separator"></div>' +
    '</div>';

    zonaZpravy.innerHTML += html;
})

poslat.addEventListener('click', function(){
  console.log("klik")
  
  zprava = psaciBox.value;

  socket.emit('codeboard-message', zprava);
})



    
    


/*
theme1.addEventListener('change', function() { 
    if (this.checked) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById("header").style.backgroundColor = "white";
      document.getElementById("header").style.color = "black";
      document.getElementById("herniPlocha").style.borderColor = "black";
      document.getElementById("tlacitko").style.color = "black";
      document.getElementById("tlacitko").style.borderColor = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById("herniPlocha").style.backgroundColor = "black";
      document.getElementById("herniPlocha").style.color = "white";
      document.getElementById("herniPlocha").style.borderColor = "white";
      document.getElementById("hjedna").style.color = "white";
      document.getElementById("hjedna").style.borderColor = "white";
    }
  });
  */