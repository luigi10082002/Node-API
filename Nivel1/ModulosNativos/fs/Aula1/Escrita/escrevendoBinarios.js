const fs = require('fs/promises');

const buffer = Buffer.from([0x48, 0x65, 0x6c, 0x6c, 0x6f]);

async function escreverArquivo() {
  try {

    await fs.writeFile('binario.dat', buffer);
    console.log('Arquivo escrito com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

escreverArquivo();
