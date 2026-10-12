const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/video') {
        const stats = fs.statSync('video.mp4');
        
        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': stats.size
        });
        
        fs.createReadStream('video.mp4').pipe(res);
    } else {
        res.end('Rota não encontrada');
    }
});

server.listen(3000, () => {
    console.log('🎬 Servidor em http://localhost:3000/video');
});
