const net = require('net');

net.createServer((socket) => {
    socket.end('goodbye\n');
}

net.connect(8000, () => {
    console.log('connected to server');
}

net.end();
