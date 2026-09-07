const http = require('http');

const server = http.createServer((req, res) => {
    const auth = req.headers['authorization'];
    
    if (!auth) {
        res.writeHead(401, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ erro: 'Token não fornecido' }));
        return;
    }
    
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({ 
        mensagem: 'Autenticado com sucesso!',
        token: auth 
    }));
});

server.listen(3000, () => {
    console.log('Server on');
});
