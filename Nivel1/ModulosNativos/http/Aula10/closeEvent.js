const http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
  res.on('close', () => {
    console.log('Conexão fechada');
  });
});
