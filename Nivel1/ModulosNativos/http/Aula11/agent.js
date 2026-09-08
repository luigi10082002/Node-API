const http = require('http');

http.get('http://exemplo.com', (res) => {
    console.log('Usando Agent padrão');
});

const agentPadrao = http.globalAgent;
console.log('Agent padrão:', agentPadrao);
console.log('Máximo de sockets:', agentPadrao.maxSockets); 
