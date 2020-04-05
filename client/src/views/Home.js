import React from 'react';
import io from 'socket.io-client';

const joinChat = e => {
    e.preventDefault();
    const socket = io('http://localhost:8080');
    // socket.on('news', function (data) {
    //     console.log(data);
    //     socket.emit('my other event', { my: 'data' });
    // });
    socket.emit('joined room 1', 'JDZDkNBiPhKBdrOEAAAA');

}


const Home = () => {


    return <div>
        Home Page
        <button onClick={(e) => joinChat(e)} >Join Chat</button>
    </div>
};

export default Home;