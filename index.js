
const express = require('express');
const app = express();
const port = 3000
const http = require('http');
const expressServer = http.createServer(app);


const { Server } = require('socket.io')
const io = new Server(expressServer)


socket.on('connection', (socket) => {
    console.log('New User Connect');


    socket.on('disconnect', function () {
        console.log('User Disconnect')
    })
})



app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})