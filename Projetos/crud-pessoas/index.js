const express = require('express')
const bodyParser = require('body-parser')
const repository = require('./repository')

const app = express()
const port = 7070

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
        extended: true
    })
)

app.get('/pessoas', repository.getPessoas)
app.get('/pessoas/:id', repository.getPessoaById)
app.post('/pessoas', repository.createPessoa)
app.put('/pessoas/:id', repository.updatePessoa)
app.delete('/pessoas/:id', repository.deletePessoa)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
    console.log(`http://localhost:${port}/`)
})