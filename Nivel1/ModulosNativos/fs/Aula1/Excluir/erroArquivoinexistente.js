const fs = require('fs/promises');

async function excluirArquivo() {
  try {
    
    await fs.unlink('nao-existe.txt');

  } catch (error) {
      if (error.code === 'ENOENT') {
          console.log('Arquivo já não existia');
      }
  }

}

excluirArquivo();
