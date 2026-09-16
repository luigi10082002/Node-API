const fs = require('fs/promises');

async function excluirPastaVazia() {
  try {

    await fs.rmdir('../Criar/nova-pasta');
    console.log('Pasta removido');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

excluirPastaVazia();
