var WebSocket = require('ws');
var socket = new WebSocket('ws://127.0.0.1:1337');
socket.on('open', function()
{
  console.log('connection opened');
  socket.send('Hello World');
});
