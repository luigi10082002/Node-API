const http = require('http');

const server = http.createServer((req, res) =>{
  res.writeHead(200, { 'Content-Type' : 'text/html' });
  res.end('<h1>Bem-vindo ao site </h1><p>Conteúdo HTML</p>');
});

server.listen(3000, () => {
  console.log('Server funcionando na porta 3000!');
});
