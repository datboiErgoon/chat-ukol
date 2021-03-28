let socket = io();
const psaciBox = document.getElementById("psaci-box");
const zonaZpravy = document.getElementById("zona-zpravy");
const poslat = document.getElementById("poslat");
let myid;


socket.on('message-from-others', function(zprava,id){
  let html;

  if(myid == id) {
    html = '<div class="zprava-box moje-zprava-box">' +
    '<div class="zprava moje-zprava" id="moje-zprava"> ' + zprava + ' </div>' +
    '<div class="separator"></div>' +
    '</div>';
  } else {
    html = '<div class="zprava-box ostatnich-zprava-box">' +
    '<div class="zprava zprava-jinych" id="zprava-jinych"> ' + zprava + ' </div>' +
    '<div class="separator"></div>' +
    '</div>';
  }

  zonaZpravy.innerHTML += html;
})

poslat.addEventListener('click', function(){
  console.log("klik")
  
  zprava = psaciBox.value;
  psaciBox.value = "";

  socket.emit('codeboard-message', zprava);
})

socket.emit('getid');

socket.on('getid', function(id){
  myid = id;
})


theme1.addEventListener('change', function() { 
    if (this.checked) {
      document.body.style.backgroundColor = "#161a1d";
      document.getElementById("header").style.backgroundColor = "orange";
      document.getElementById("header").style.color = "black";
      document.getElementById("zona-zpravy").style.backgroundColor = "#161a1d";
      document.getElementById("psaci-box").style.backgroundColor = "orange";
      document.getElementById("psaci-box").style.borderColor = "black";
      document.getElementById("poslat").style.backgroundColor = "orange";
      document.getElementById("poslat").style.color = "black";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      document.getElementById("motiv").style.color = "orange";
      $('#sstyle').append('#moje-zprava {background-color: orange !important; color: black !important} #zprava-jinych {background-color: #161a1d !important; color: white !important}; ');
    } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("header").style.color = "white";
      document.getElementById("zona-zpravy").style.backgroundColor = "white";
      document.getElementById("psaci-box").style.backgroundColor = "white";
      document.getElementById("poslat").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("poslat").style.color = "white";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      document.getElementById("motiv").style.color = "";
      $( "#sstyle" ).empty();
    }
  });

  theme2.addEventListener('change', function() { 
    if (this.checked) {
      document.body.style.backgroundColor = "#242424";
      document.getElementById("header").style.backgroundColor = "#7CE41C";
      document.getElementById("header").style.color = "#242424";
      document.getElementById("zona-zpravy").style.backgroundColor = "#242424";
      document.getElementById("psaci-box").style.backgroundColor = "#7CE41C";
      document.getElementById("psaci-box").style.borderColor = "black";
      document.getElementById("poslat").style.backgroundColor = "#7CE41C";
      document.getElementById("poslat").style.color = "#242424";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      document.getElementById("motiv").style.color = "#7CE41C";
      $('#sstyle').append('#moje-zprava {background-color:#7CE41C !important; color: black !important} #zprava-jinych {background-color: #242424 !important; color: white !important}; ');
    } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("header").style.color = "white";
      document.getElementById("zona-zpravy").style.backgroundColor = "white";
      document.getElementById("psaci-box").style.backgroundColor = "white";
      document.getElementById("poslat").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("poslat").style.color = "white";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      document.getElementById("motiv").style.color = "";
      $( "#sstyle" ).empty();
    }
  });
  
  theme3.addEventListener('change', function() { 
    if (this.checked) {
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.backgroundColor = "#fb45de";
      document.getElementById("header").style.color = "white";
      document.getElementById("zona-zpravy").style.backgroundColor = "white";
      document.getElementById("psaci-box").style.backgroundColor = "white";
      document.getElementById("psaci-box").style.borderColor = "black";
      document.getElementById("poslat").style.backgroundColor = "#fb45de";
      document.getElementById("poslat").style.color = "white";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      $('#sstyle').append('#moje-zprava {background-color: #fb45de !important; color: white !important} #zprava-jinych {background-color: white !important; color: black !important}; ');
    } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("header").style.color = "white";
      document.getElementById("zona-zpravy").style.backgroundColor = "white";
      document.getElementById("psaci-box").style.backgroundColor = "white";
      document.getElementById("poslat").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("poslat").style.color = "white";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      $( "#sstyle" ).empty();
    }
  });


  theme4.addEventListener('change', function() { 
    if (this.checked) {
      document.body.style.backgroundColor = "#242526";
      document.getElementById("header").style.backgroundColor = "#606060";
      document.getElementById("header").style.color = "#242526";
      document.getElementById("zona-zpravy").style.backgroundColor = "#242526";
      document.getElementById("psaci-box").style.backgroundColor = "#606060";
      document.getElementById("psaci-box").style.borderColor = "black";
      document.getElementById("poslat").style.backgroundColor = "#606060";
      document.getElementById("poslat").style.color = "#242526";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      document.getElementById("motiv").style.color = "#606060";
      $('#sstyle').append('#moje-zprava {background-color:#606060 !important; color: black !important} #zprava-jinych {background-color: #242526 !important; color: #606060 !important}; ');
    } else {
      document.body.style.backgroundColor = "white";
      document.getElementById("header").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("header").style.color = "white";
      document.getElementById("zona-zpravy").style.backgroundColor = "white";
      document.getElementById("psaci-box").style.backgroundColor = "white";
      document.getElementById("poslat").style.backgroundColor = "rgb(0, 127, 255)";
      document.getElementById("poslat").style.color = "white";
      document.getElementById("zona-zpravy").style.borderColor = "black";
      document.getElementById("motiv").style.color = "";
      $( "#sstyle" ).empty();
    }
  });