const http = require('http');

const agent = new http.Agent({
    keepAlive: true,
    maxSockets: 5,
    maxFreeSockets: 2
});

console.log('Status inicial:', {
    sockets: agent.sockets,
    freeSockets: agent.freeSockets,
    requests: agent.requests
});

let completas = 0;
for (let i = 0; i < 15; i++) {
    http.get({
        hostname: 'jsonplaceholder.typicode.com',
        path: '/posts/1',
        agent: agent
    }, (res) => {
        res.on('data', () => {});
        res.on('end', () => {
            completas++;
            console.log(`Requisição ${i + 1} completa`);
            console.log('Status atual:', {
                sockets: agent.sockets ? Object.keys(agent.sockets).length : 0,
                freeSockets: agent.freeSockets ? Object.keys(agent.freeSockets).length : 0
            });
            if (completas === 15) {
                agent.destroy();
                console.log('Agent destruído');
            }
        });
    });
}
