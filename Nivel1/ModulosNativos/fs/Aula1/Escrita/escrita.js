const fs = require('fs/promises');

async function escreverArquivo() {
  try {

    await fs.writeFile('novo.txt', 'Olá Mundo! Meu nome é Luigi');
    console.log('Arquivo escrito com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

escreverArquivo();
