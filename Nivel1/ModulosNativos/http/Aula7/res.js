const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Olá ');
  res.write('Mundo');
  
  //Sem *res.end();* a requisição fica pendurada e nunca termina
  res.end();
});

server.listen(3000, () => {
  console.log('Server on');
});
