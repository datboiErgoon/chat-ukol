windows.onload = function() {
    socket = io.connect('http://localhost:3000');
    socket.on('codeboard-message-broadcasted', function(zprava){
        let html = '<div class="zprava-box ostatnich-zprava-box">' +
        '<div class="zprava zprava-jinych"> ' + zprava + ' </div>' +
        '<div class="separator"></div>' +
    '</div>';

        document.getElementById("zona-zpravy").innerHTML += html;
    })
}


function poslatZpravu(){
    let zprava = document.getElementById("psaci-box").value;
    let html = '<div class="zprava-box moje-zprava-box">' +
                    '<div class="zprava moje-zprava"> ' + zprava + ' </div>' +
                    '<div class="separator"></div>' +
                '</div>';
                
    document.getElementById("zona-zpravy").innerHTML += html;
    document.getElementById("psaci-box").value = "";


    
    socket.emit('codeboard-message', zprava);
}