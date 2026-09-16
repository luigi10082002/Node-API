const fs = require('fs/promises');

async function copiarArquivo() {
  try {

    await fs.copyFile('./A/origem.txt', './A/destino.txt');
    console.log('Arquivo copiado');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

copiarArquivo();
