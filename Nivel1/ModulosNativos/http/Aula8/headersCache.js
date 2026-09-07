const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Cache-Control', 'public, max-age=3600');
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end('<h1>Página com cache de 1 hora</h1>');
    } 
    else if (req.url === '/no-cache') {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Content-Type', 'text/html');
        res.writeHead(200);
        res.end('<h1>Esta página NUNCA é cacheada</h1>');
    }
});

server.listen(3000);

server.listen(3000, () => {
    console.log('Server on');
});
