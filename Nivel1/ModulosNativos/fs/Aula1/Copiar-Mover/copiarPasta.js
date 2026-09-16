const fs = require('fs/promises');

async function copiarPasta() {
  try {

    // Copiar pasta inteira de uma vez
    await fs.cp('./A', './B', { recursive: true });
    console.log('Pasta copiada');

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

copiarPasta();
