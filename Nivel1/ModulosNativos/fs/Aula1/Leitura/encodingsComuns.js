async function lerArquivos() {
  try {
    
    const txt = await fs.readFile('arquivo.txt', 'utf8');     // Texto UTF-8 (mais comum)
    const asc2 = await fs.readFile('arquivo.txt', 'ascii');    // ASCII
    const latin1 = await fs.readFile('arquivo.txt', 'latin1');   // ISO-8859-1
    const base64 = await fs.readFile('arquivo.txt', 'base64');   // Base64

  } catch(error) {
    console.log('Erro');
  }
}

lerArquivos();
