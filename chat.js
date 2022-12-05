const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const port = process.env.PORT || 3200;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
app.get('/',(req, res) => {
    res.sendFile('index.html');
});

io.on('connection',(socket) => {
    console.log('connected');
    socket.on('disconnect', () =>{
        console.log('user disconnected');
    })

    socket.on('chat message',(msg) =>{
        console.log(msg);
    })
})



server.listen(port,() => console.log(`${port} up`));














/*io.engine.generateId = (req) => {
    return uuid.v4();
}
// io.httpServer
io.on("connection",(socket) => {
    console.log(socket.id);
});

socket.on("connect", () => {
    console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});

httpServer.listen(PORT,() => console.log("aaaaaaaa"));*/