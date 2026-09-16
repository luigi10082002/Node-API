const fs = require('fs/promises');

const dados = { nome: 'João', idade: 30 };

async function escreverArquivo() {
  try {

    await fs.writeFile(
        'dados.json',
        JSON.stringify(dados, null, 2)  // formatado
    );

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

escreverArquivo();
