/**
 * Created by bhavyaagg on 11/01/18.
 */

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

const utils = require('./utils');
const currentSessionsArray = [];

app.use(express.static(__dirname + '/public'));

function onConnection(socket) {
  socket.on('drawing', (data) => {
    console.log(data)
    socket.broadcast.emit('drawing', data)
  });

  socket.on("createSession", () => {
    let newSessionId = utils.randomSessionId(currentSessionsArray);
    currentSessionsArray.push(newSessionId);
    socket.emit("createdSession", {
      success: true,
      sessionId: newSessionId
    });
  })
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));