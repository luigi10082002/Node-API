const fs = require('fs/promises');

async function lerArquivos() {
  try {
    const conteudo = await fs.readFile('arquivo.txt', 'utf8');
    console.log('Conteúdo: ', conteudo);
  } catch(error) {
    console.log('Erro');
  }
}

lerArquivos();
