const fs = require('fs/promises');

async function excluirPastaVazia() {
  try {

    //rmdir NÃO funciona em pastas com conteúdo
    // * await fs.rmdir('../Criar/pai');  // Erro: ENOTEMPTY

    //rm com recursive funciona
    await fs.rm('../Criar/pai', { recursive: true, force: true });

  } catch(error) {
    console.log('Erro: ', error.message);
  }
}

excluirPastaVazia();
