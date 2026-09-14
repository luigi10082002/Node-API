const axios = require('axios');

axios.get('https://api-protegida.com/dados')
    .then(res => console.log(res.data))
    .catch(error => {
        console.error('Bloqueado pelo Cloudflare:', error.response?.status);
    });
