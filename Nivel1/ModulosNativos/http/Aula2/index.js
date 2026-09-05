const http = require('http');

const server = http.createServer((req, res) =>{
  console.log('URL acessada:', req.url);
  console.log('Método:', req.method);

  res.end('OK');
});

server.listen(3000, () => {
  console.log('Server funcionando na porta 3000!');
});
