const http = require('http');

function buscarUsuarios() {
    console.log('Buscando usuários...');
    
    http.get('http://jsonplaceholder.typicode.com/users', (res) => {
        let dados = '';
        let totalChunks = 0;
        
        console.log(`Status: ${res.statusCode} ${res.statusMessage}`);
        console.log(`Headers:`, res.headers);
        
        res.on('data', (chunk) => {
            totalChunks++;
            dados += chunk.toString();
            
            if (totalChunks % 5 === 0) {
                console.log(`${totalChunks} chunks recebidos...`);
            }
        });
        
        res.on('end', () => {
            console.log('Download completo!');
            console.log(`Total de chunks: ${totalChunks}`);
            console.log(`Tamanho total: ${dados.length} caracteres`);
            
            try {
                const usuarios = JSON.parse(dados);
                console.log(`Encontrados ${usuarios.length} usuários:`);
                usuarios.forEach(user => {
                    console.log(`  - ${user.name} (${user.email})`);
                });
            } catch (error) {
                console.error('Erro ao parsear JSON:', error.message);
            }
        });
        
        res.on('error', (error) => {
            console.error('Erro na resposta:', error.message);
        });
        
    }).on('error', (error) => {
        console.error('Erro na requisição:', error.message);
        console.error(`  Código: ${error.code}`);
        console.error(`  Mensagem: ${error.message}`);
    });
}

buscarUsuarios();
