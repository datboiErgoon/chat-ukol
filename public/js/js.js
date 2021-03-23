
function poslatZpravu(){
    var zprava = document.getElementById("psaci-box").value;
    var html = '<div class="zprava-box moje-zprava-box">' +
                    '<div class="zprava moje-zprava"> ' + zprava + ' </div>' +
                    '<div class="separator"></div>' +
                '</div>';
                
    document.getElementById("zona-zpravy").innerHTML += html;
    document.getElementById("psaci-box").value = "";
    
    socket.emit('codeboard-message', message);
}