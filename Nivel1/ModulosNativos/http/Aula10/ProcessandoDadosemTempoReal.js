const http = require('http');

http.get('http://jsonplaceholder.typicode.com/comments?postId=1', (res) => {
    let buffer = '';
    let totalComentarios = 0;
    
    console.log('Processando comentários em tempo real...');
    
    res.on('data', (chunk) => {
        buffer += chunk.toString();
        
        let posicao;
        while ((posicao = buffer.indexOf('"id":')) !== -1) {
            const fim = buffer.indexOf('}', posicao);
            if (fim !== -1) {
                const comentario = buffer.substring(posicao, fim + 1);
                totalComentarios++;
                console.log(`Comentário #${totalComentarios} recebido`);
                
                buffer = buffer.substring(fim + 1);
            } else {
                break;
            }
        }
    });
    
    res.on('end', () => {
        console.log(`Total de comentários processados: ${totalComentarios}`);
    });
});
