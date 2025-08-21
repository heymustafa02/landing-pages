const express = require('express');
const path = require('path'); // Import path module

const app = express();
const http = require('http');
const server = http.createServer(app);

const socketio = require('socket.io');
const io = socketio(server);

// Set view engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
   res.send("hey");
});

server.listen(3000, () => {
   console.log("Server is running on port 3000");
});
