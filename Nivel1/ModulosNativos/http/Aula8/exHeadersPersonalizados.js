const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    
    res.setHeader('Content-Type', 'application/json');
    
    console.log('Content-Type atual:', res.getHeader('Content-Type'));
    
    res.removeHeader('X-Powered-By'); 
    
    res.writeHead(200);
    res.end(JSON.stringify({
        mensagem: 'Headers configurados com sucesso!',
        headers: {
            'Content-Type': res.getHeader('Content-Type'),
            'Access-Control-Allow-Origin': res.getHeader('Access-Control-Allow-Origin'),
            'X-Powered-By': res.getHeader('X-Powered-By') 
        }
    }));
});

server.listen(3000, () => {
    console.log('Servidor on');
});
