const http = require('http');

http.get('http://jsonplaceholder.typicode.com/users', (res) => {
    let dados = '';
    
    res.on('data', chunk => dados += chunk);
    res.on('end', () => {
        const usuarios = JSON.parse(dados);
        console.log('Lista de Usuários:');
        usuarios.forEach(user => {
            console.log(`- ${user.name} (${user.email})`);
        });
    });
}).on('error', (error) => {
    console.error('Erro:', error.message);
});
