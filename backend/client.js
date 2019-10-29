const
  io = require('socket.io-client'),
  ioClient = io.connect("http://localhost:19002");

ioClient.on('sport-list', console.log);

///
ioClient.emit('get-sport', {id: 2, meta_id: 'tfcygvu672geube'});
ioClient.on('get-sport', r => console.log(r));
