const fs = require('fs');

async function contarLinhas() {
    const stream = fs.createReadStream('dados.csv', 'utf8');
    
    let contador = 0;
    let buffer = '';
    
    for await (const chunk of stream) {
        buffer += chunk;
        
        // Processa linhas completas
        const linhas = buffer.split('\n');
        buffer = linhas.pop();  // guarda linha incompleta
        
        for (const linha of linhas) {
            if (linha.includes('SP')) contador++;
        }
    }
    
    // Processa a última linha do buffer
    if (buffer.includes('SP')) contador++;
    
    console.log(`✅ Linhas com "SP": ${contador}`);
}

contarLinhas();
