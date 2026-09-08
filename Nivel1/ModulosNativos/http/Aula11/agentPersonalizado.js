const http = require('http');

const meuAgent = new http.Agent({
    keepAlive: true, 
    maxSockets: 10, 
    maxFreeSockets: 5, 
});

http.get({
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1',
    agent: meuAgent 
}, (res) => {
    console.log('Requisição com Agent personalizado');
});
