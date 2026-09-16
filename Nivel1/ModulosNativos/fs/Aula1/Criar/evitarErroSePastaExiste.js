const fs = require('fs/promises');

async function criarPasta() {
  try {

    await fs.mkdir('nova-pasta');

  } catch (error) {
      if (error.code !== 'EEXIST') throw error;

      console.log(error);
  }
}

criarPasta();
