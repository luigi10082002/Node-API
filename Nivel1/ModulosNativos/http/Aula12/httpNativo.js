const http = require('http');

const server = http.createServer((req, res) => {
    const { method, url } = req;
    
    if (method === 'GET' && url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home');
    } 
    else if (method === 'GET' && url === '/usuarios') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{ nome: 'João' }]));
    } 
    else if (method === 'POST' && url === '/usuarios') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const usuario = JSON.parse(body);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ id: 1, ...usuario }));
        });
    } 
    else {
        res.writeHead(404);
        res.end('Não encontrado');
    }
});

server.listen(3000);
