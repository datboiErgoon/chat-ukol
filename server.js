
const express = require('express');
const path = require('path');
const app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', (socket) => {
  console.log('User Online');
  
  socket.on('codeboard-message', (msg) => {
    console.log('zprava: ' + msg, socket.id);
	socket.emit('message-from-others', msg);
  });
  
});

let server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
http.listen(server_port, () => {
  console.log('listening on *:' + server_port);
});

