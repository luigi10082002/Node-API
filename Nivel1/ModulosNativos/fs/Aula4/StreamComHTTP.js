const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/video') {
        // Stream direto para a resposta HTTP
        const stream = fs.createReadStream('video.mp4');
        
        res.writeHead(200, { 'Content-Type': 'video/mp4' });
        
        stream.pipe(res);  // Stream → Resposta HTTP
        
        stream.on('error', () => {
            res.writeHead(500);
            res.end('Erro');
        });
    } else {
        res.end('Olá');
    }
});

server.listen(3000);
