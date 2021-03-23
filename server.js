/*
const path = require('path');
const express = require('express');

const app = express();

// Nastavit hlavní složku
app.use (express.static(path.join(__dirname, 'public')));

const PORT = 3000 || process.env.PORT;

app.listen (PORT, () => console.log(`Server running on port ${PORT}`));

io.on('connection', (socket) => {
    console.log("User Online");


    socket.on("codeboard-message", (msg) => {
        console.log("Zpráva doručena : " + msg);
        socket.broadcast.emit("codeboard-message-broadcasted", msg);
    })
}) 


/*
npm run dev
*/

let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('User Online');
  
  socket.on('codeboard-message', (msg) => {
    console.log('zprava: ' + msg);
	socket.broadcast.emit('message-from-others', msg);
  });
  
});

let server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port, () => {
  console.log('listening on *:' + server_port);
});