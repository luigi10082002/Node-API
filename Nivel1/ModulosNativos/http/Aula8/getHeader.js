const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('X-Version', '1.0.0');
    
    const contentType = res.getHeader('Content-Type');
    const version = res.getHeader('X-Version');
    
    console.log('Content-Type:', contentType); 
    console.log('X-Version:', version); 
    
    res.writeHead(200);
    res.end('Headers lidos com sucesso!');
});

server.listen(3000, () => {
    console.log('Server on');
});
