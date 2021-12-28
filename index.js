const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);


let clicks = 0;

app.use(express.static('view'))

io.on('connection', (socket)=>{
    socket.emit('clicks', clicks)
    console.log("User #" + socket.id + " connected")

    socket.on('click', ()=>{
        clicks++;
        console.log(clicks)
        io.emit('clicks', clicks)
    })
})


server.listen(3000)