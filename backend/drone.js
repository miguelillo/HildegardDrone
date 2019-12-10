const dgram = require('dgram');
const wait = require('waait');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const throttle = require('lodash/throttle');
const commandDelays = require('./commDelays');

const PORT = 8889;
const STATE_PORT = 8890;
const STREAMING_PORT = 11111;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const droneState = dgram.createSocket('udp4');
droneState.bind(STATE_PORT);

const droneStreaming = dgram.createSocket('udp4');
droneStreaming.bind(STREAMING_PORT);

drone.on('message', (message) => {
    console.log(`🤖 : ${message}`);
});

droneStreaming.on('message', (message) => {
    console.log(message);
})

function parseState(state) {
    return state
        .split(';')
        .map(x => x.split(':'))
        .reduce((data, [key, value]) => {
            data[key] = value;
            return data;
        }, {});
}

function handleError(err) {
    if (err) {
        console.log('ERROR');
        console.log(err);
    }
}

drone.send('command', 0, 'command'.length, PORT, HOST, handleError);
drone.send('streamon', 0, 'command'.length, PORT, HOST, handleError);

io.on('connection', socket => {
    socket.on('command', command => {
        console.log('command Sent from browser');
        drone.send(command, 0, command.length, PORT, HOST, handleError);
    });
    socket.emit('status', 'CONNECTED');
});

droneState.on(
    'message',
    throttle(state => {
        const formattedState = parseState(state.toString());
        console.log(formattedState);
        io.sockets.emit('dronestate', formattedState);
    }, 100)
);

droneStreaming.on(
    'stream',
    throttle(stream => {
        console.log(stream);
        io.sockets.emit('dronestream', stream);
    }, 100)
);

http.listen(6767, () => {
    console.log('Socket io server up and running');
});