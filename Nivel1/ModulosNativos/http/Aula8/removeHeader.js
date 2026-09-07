const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('X-Powered-By', 'Node.js');
    res.setHeader('Cache-Control', 'max-age=3600');
    
    res.removeHeader('X-Powered-By');
    
    console.log('Headers após remoção:');
    console.log('X-Powered-By:', res.getHeader('X-Powered-By')); 
    
    res.writeHead(200);
    res.end('Header removido!');
});

server.listen(3000, () => {
    console.log('Server on');
});
