const fs = require('fs/promises');

async function excluirArquivo() {
  try {

    await fs.unlink('../Criar/vazio.txt');
    console.log('Arquivo removido');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

excluirArquivo();
