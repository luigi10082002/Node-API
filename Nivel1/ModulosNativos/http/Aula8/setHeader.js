const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('X-Powered-By', 'Node.js');
    
    res.writeHead(200);
    res.end('<h1>Headers definidos!</h1>');
});

server.listen(3000, () => {
    console.log('Server on');
});
