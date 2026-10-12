fs.readFile()          // Ler arquivo
fs.writeFile()         // Escrever arquivo
fs.appendFile()        // Adicionar conteúdo
fs.mkdir()             // Criar pasta
fs.unlink()            // Excluir arquivo
fs.rm()                // Excluir pasta
fs.copyFile()          // Copiar arquivo
fs.rename()            // Renomear/mover
fs.stat()              // Obter informações
fs.readdir()           // Listar arquivos

//---------------------- EX ----------------------//

const fs = require('fs/promises');

async function exemplo() {
    // O programa NÃO para — continua em background
    const dados = await fs.readFile('arquivo.txt', 'utf8');
    console.log(dados);
    console.log('Fim');
}

exemplo();
