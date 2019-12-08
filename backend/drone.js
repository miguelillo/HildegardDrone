import createSocket from 'dgram';
import wait from 'waait';
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
import throttle from 'lodash/throttle';
import delays from './commDelays';
//
const PORT = 8889;
const STATE_PORT = 8890;
const HOST = '192.168.10.1';

const drone = createSocket('udp4');
drone.bind(PORT);

const droneState = createSocket('udp4');
droneState.bind(STATE_PORT);

drone.on('message', (message) => {
    console.log(`🤖 : ${message}`);
});

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

const commands = ['command', 'battery?', 'takeoff', 'land'];

drone.send('command', 0, 'command'.length, PORT, HOST, handleError);

io.on('connection', socket => {
    socket.on('command', command => {
        console.log('command Sent from browser');
        console.log(command);
        drone.send(command, 0, command.length, PORT, HOST, handleError);
    });
    socket.emit('status', 'CONNECTED');
});

droneState.on(
    'message',
    throttle(state => {
        const formattedState = parseState(state.toString());
        io.sockets.emit('dronestate', formattedState);
    }, 100)
);

http.listen(6767, () => {
    console.log('Socket io server up and running');
});