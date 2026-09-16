const fs = require('fs/promises');

async function criarArquivo() {
  try {

    await fs.writeFile('vazio.txt', '');
    console.log('Arquivo criado com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

criarArquivo();
