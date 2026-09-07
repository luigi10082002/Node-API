const http = require('http');

const server = http.createServer((req, res) => {
    const userAgent = req.headers['user-agent'];
    const acceptLanguage = req.headers['accept-language'];
    const authorization = req.headers['authorization'];
    
    console.log('User-Agent:', userAgent);
    console.log('Accept-Language:', acceptLanguage);
    console.log('Authorization:', authorization);
    
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(JSON.stringify({
        'Seu User-Agent': userAgent,
        'Seu Idioma': acceptLanguage
    }));
});

server.listen(3000, () => {
    console.log('Server on');
});
