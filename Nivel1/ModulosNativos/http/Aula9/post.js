const http = require('http');

const dados = JSON.stringify({
    title: 'Node.js HTTP Client',
    body: 'Aprendendo requisições',
    userId: 1
});

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dados)
    }
};

const req = http.request(options, (res) => {
    let responseData = '';
    
    res.on('data', chunk => responseData += chunk);
    res.on('end', () => {
        console.log('Resposta do servidor:');
        console.log(JSON.parse(responseData));
    });
});

req.on('error', (error) => {
    console.error('Erro:', error.message);
});

req.write(dados);
req.end(); 
