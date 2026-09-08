const http = require('http');

const agent = new http.Agent({
    keepAlive: true,
    maxSockets: 5,
    keepAliveMsecs: 3000 
});

async function fazerRequisicoes() {
    console.log('Fazendo 10 requisições...');
    const inicio = Date.now();
    
    for (let i = 0; i < 10; i++) {
        await new Promise((resolve) => {
            http.get({
                hostname: 'jsonplaceholder.typicode.com',
                path: '/posts/1',
                agent: agent
            }, (res) => {
                let dados = '';
                res.on('data', chunk => dados += chunk);
                res.on('end', () => {
                    console.log(`Requisição ${i + 1} concluída`);
                    resolve();
                });
            });
        });
    }
    
    const fim = Date.now();
    console.log(`Tempo total: ${fim - inicio}ms`);
    console.log(`Conexões reutilizadas, mais rápido!`);
}

fazerRequisicoes();
