const fs = require('fs/promises');

async function criarPasta() {
  try {

    await fs.mkdir('nova-pasta');
    console.log('Pasta criada com sucesso!');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

criarPasta();
