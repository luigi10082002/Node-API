const agent = new http.Agent({
    keepAlive: true,
    maxSockets: 10
});

http.get({ hostname: 'exemplo.com', agent: agent }, () => {});

console.log('Status do Agent:');
console.log('Sockets em uso:', agent.sockets);
console.log('Sockets livres:', agent.freeSockets);
console.log('Requisições na fila:', agent.requests);
console.log('Total de conexões:', 
    (agent.sockets ? Object.values(agent.sockets).flat().length : 0) +
    (agent.freeSockets ? Object.values(agent.freeSockets).flat().length : 0)
);
