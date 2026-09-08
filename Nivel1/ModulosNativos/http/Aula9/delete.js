const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1',
    method: 'DELETE'
};

const req = http.request(options, (res) => {
    console.log('DELETE Status:', res.statusCode); // 200 ou 204
    res.on('data', chunk => console.log('DELETE Response:', chunk.toString()));
});

req.end();
