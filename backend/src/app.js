require('dotenv').config();
const express = require('express');
const http = require('http'); // Import http module
const socketIo = require('socket.io'); // Import Socket.IO
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 1337;
const app = express();
const server = http.createServer(app); // Create an http server

// connect to db
mongoose.connect(process.env.dbURI, { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then(result => console.log('connected to db'))
    .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(require('./routes/login'));
app.use(require('./routes/user'));
app.use(require('./routes/admin'));

// Create a Socket.IO instance and attach it to the server
const io = socketIo(server);

// Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle incoming messages
    socket.on('message', (msg) => {
        console.log('Message:', msg);
        // Broadcast the message to all clients
        io.emit('message', msg);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server Started at Port ${PORT}`);
});
