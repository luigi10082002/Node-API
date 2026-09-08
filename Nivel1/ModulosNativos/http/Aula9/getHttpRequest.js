const http = require('http');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1',
    method: 'GET'
};

const req = http.request(options, (res) => {
    let dados = '';
    
    res.on('data', chunk => dados += chunk);
    res.on('end', () => {
        console.log('Resposta:', JSON.parse(dados));
    });
});

req.on('error', (error) => {
    console.error('Erro:', error);
});

req.end(); 
