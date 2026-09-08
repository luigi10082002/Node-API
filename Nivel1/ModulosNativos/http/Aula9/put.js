const dados = JSON.stringify({
    id: 1,
    title: 'Título Atualizado',
    body: 'Conteúdo atualizado',
    userId: 1
});

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(dados)
    }
};

const req = http.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => console.log('PUT Response:', JSON.parse(data)));
});

req.write(dados);
req.end();
