const http = require('http');

const server = http.createServer((req, res) => {
    console.log('URL acessada: ', req.url);
    console.log('Método HTTP: ', req.method);
    console.log('Headers: ', req.headers);
    console.log('Versão HTTP: ', req.httpVersion);
});

server.listen(3000, () => {
    console.log('Server on');
});
