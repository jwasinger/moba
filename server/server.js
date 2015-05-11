var ws = require('ws');

var server = new ws.Server({port:1337});
server.on('connection', function connect(ws)
{
  ws.on('message', function message(data)
  {
    console.log('received: %s', data);
  });
  ws.send('new connection');
});
