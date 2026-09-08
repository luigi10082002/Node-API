const http = require('http');

const agentFIFO = new http.Agent({
    scheduling: 'fifo',
    keepAlive: true,
    maxSockets: 3
});

const agentLIFO = new http.Agent({
    scheduling: 'lifo',
    keepAlive: true,
    maxSockets: 3
});

console.log('Comparando FIFO vs LIFO:');
console.log('- FIFO: distribui carga uniformemente');
console.log('- LIFO: melhor performance (reutiliza conexões recentes)');
