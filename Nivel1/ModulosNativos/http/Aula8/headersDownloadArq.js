const http = require('http');

const server = http.createServer((req, res) => {
    const arquivo = 'relatorio.pdf';
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${arquivo}"`);
    res.setHeader('Content-Length', '1024');
    
    res.removeHeader('Cache-Control');
    
    res.writeHead(200);
    res.end('Conteúdo do PDF aqui...');
});

server.listen(3000, () => {
    console.log('Server on');
});
