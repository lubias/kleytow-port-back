const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

app.listen(port, () => {
    console.log(`Exemplo de app rodando em http://localhost:${port}`)
})