const fs = require('fs/promises');

const linhas = ['Linha 1', 'Linha 2', 'Linha 3'].join('\n');

async function escreverArquivo() {
  try {

    await fs.writeFile('log.txt', linhas);

    //Para adicionar ao final sem sobrescrever
    await fs.appendFile('log.txt', '\nNova linha adicionada');

    console.log('Arquivo escrito com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

escreverArquivo();
