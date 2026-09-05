const http = require('http');

const server = http.createServer((req, res) =>{
  const user = { nome: 'Luigi', idade: 24 };

  res.writeHead(200, { 'Content-Type' : 'application/json' });
  res.end(JSON.stringify(user));
});

server.listen(3000, () => {
  console.log('Server funcionando na porta 3000!');
});
