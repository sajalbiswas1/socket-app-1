
const express = require('express');
const app = express();
const port = 5000

const { createServer } = require("http");
const { Server } = require('socket.io')
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });



io.on('connection', (socket) => {
    console.log('New User Connect',socket.id);


    socket.on('disconnect', function () {
        console.log('User Disconnect')
    })
})



app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

httpServer.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})