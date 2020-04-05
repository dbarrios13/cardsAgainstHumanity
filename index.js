const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const PORT = process.env.PORT || 8080;
const routes = require('./routes');
const io = require('socket.io')(http);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.use(routes);



// io.onconnection(socket => {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', data => {
//         console.log(data);
//     })
// })


http.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
    socket.on('room', function (room) {
        console.log(room)
        socket.join(room);
    })
});