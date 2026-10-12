fs.readFileSync()      // Ler arquivo
fs.writeFileSync()     // Escrever arquivo
fs.appendFileSync()    // Adicionar conteúdo
fs.mkdirSync()         // Criar pasta
fs.unlinkSync()        // Excluir arquivo
fs.rmSync()            // Excluir pasta
fs.copyFileSync()      // Copiar arquivo
fs.renameSync()        // Renomear/mover
fs.statSync()          // Obter informações
fs.readdirSync()       // Listar arquivos

//---------------------- EX ----------------------//

const fs = require('fs');

// O programa PARA aqui até o arquivo ser lido
const dados = fs.readFileSync('arquivo.txt', 'utf8');
console.log(dados);

// Só chega aqui DEPOIS da leitura
console.log('Fim');
