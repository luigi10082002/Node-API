const http = require('http');

const agentOtimizado = new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 1000,
    maxSockets: 20,
    maxFreeSockets: 10,
    scheduling: 'lifo',
    timeout: 30000
});

async function fazerRequisicaoComMetrica(id) {
    const inicio = Date.now();
    
    return new Promise((resolve) => {
        const req = http.get({
            hostname: 'jsonplaceholder.typicode.com',
            path: `/posts/${id}`,
            agent: agentOtimizado
        }, (res) => {
            let dados = '';
            res.on('data', chunk => dados += chunk);
            res.on('end', () => {
                const duracao = Date.now() - inicio;
                console.log(`Requisição ${id} concluída em ${duracao}ms`);
                resolve();
            });
        });
        
        req.on('error', (error) => {
            console.log(`Requisição ${id} falhou:`, error.message);
            resolve();
        });
    });
}

async function testarPerformance() {
    console.log('Testando agente otimizado...');
    const inicio = Date.now();
    
    const promises = [];
    for (let i = 1; i <= 20; i++) {
        promises.push(fazerRequisicaoComMetrica(i));
    }
    
    await Promise.all(promises);
    
    const fim = Date.now();
    console.log(`\nTOTAL: ${fim - inicio}ms`);
    console.log(`Sockets ativos: ${agentOtimizado.sockets ? Object.keys(agentOtimizado.sockets).length : 0}`);
}

testarPerformance();
