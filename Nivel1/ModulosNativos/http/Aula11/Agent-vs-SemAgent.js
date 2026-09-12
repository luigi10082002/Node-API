const http = require('http');

async function semAgent() {
    console.log('Sem Agent (cria conexão nova cada vez)');
    const inicio = Date.now();
    
    for (let i = 0; i < 10; i++) {
        await new Promise((resolve) => {
            http.get('http://jsonplaceholder.typicode.com/posts/1', (res) => {
                res.on('data', () => {});
                res.on('end', resolve);
            });
        });
    }
    
    console.log(`Sem Agent: ${Date.now() - inicio}ms`);
}

async function comAgent() {
    console.log('Com Agent (reutiliza conexões)');
    const agent = new http.Agent({ keepAlive: true, maxSockets: 5 });
    const inicio = Date.now();
    
    for (let i = 0; i < 10; i++) {
        await new Promise((resolve) => {
            http.get({
                hostname: 'jsonplaceholder.typicode.com',
                path: '/posts/1',
                agent: agent
            }, (res) => {
                res.on('data', () => {});
                res.on('end', resolve);
            });
        });
    }
    
    agent.destroy();
    console.log(`Com Agent: ${Date.now() - inicio}ms`);
}

(async () => {
    await semAgent();
    await comAgent();
})();
