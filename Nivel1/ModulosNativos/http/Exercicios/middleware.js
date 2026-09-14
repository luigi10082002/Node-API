const http = require('http');

function logMiddleware(req) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
}

const server = http.createServer((req, res) => {
    logMiddleware(req);
    
    // ... resto da lógica
    res.writeHead(200);
    res.end('OK');
});

server.listen(3000);
