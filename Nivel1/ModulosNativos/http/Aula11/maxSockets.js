const http = require('http');

const agentLimitado = new http.Agent({
    maxSockets: 2, 
    keepAlive: true
});

console.log('🚀 Iniciando 10 requisições com limite de 2 sockets...');

for (let i = 0; i < 10; i++) {
    const req = http.get({
        hostname: 'jsonplaceholder.typicode.com',
        path: '/posts/1',
        agent: agentLimitado
    }, (res) => {
        let dados = '';
        res.on('data', chunk => dados += chunk);
        res.on('end', () => {
            console.log(`Requisição ${i + 1} concluída`);
        });
    });
    
    req.on('error', (error) => {
        console.log(`Erro na requisição ${i + 1}:`, error.message);
    });
}

console.log('Agora veja como as requisições são enfileiradas...');
