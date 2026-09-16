const fs = require('fs/promises');

async function criarPasta() {
  try {

    const pastaTemp = await fs.mkdtemp('/tmp/minha-app-');
    console.log(pastaTemp);  // /tmp/minha-app-AbC123

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

criarPasta();
