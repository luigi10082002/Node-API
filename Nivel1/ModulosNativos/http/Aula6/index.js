const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1><p>Bem-vindo!</p>');
    } 
    else if (url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ mensagem: 'API funcionando' }));
    } 
    else {
        res.writeHead(404);
        res.end('Página não encontrada');
    }
});

server.listen(3000, () => {
  console.log('Server funcionando na porta 3000!');
});
