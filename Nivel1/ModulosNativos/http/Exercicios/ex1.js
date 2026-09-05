const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  
  if(url == '/') {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    res.end('<h1>Bem-vindo!</h1>');
  
  } else if(url == '/contato') {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    res.end('<h1>Página de contato</h1>');
  
  } else {
    res.writeHead(200, { 'Content-Type' : 'text/html' });
    res.end('<h1>404 - Não encontrado</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server on!');
});
