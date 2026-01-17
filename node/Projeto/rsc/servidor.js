const Porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodedados = require('./bancodedados')

app.use(bodyParser.urlencoded({extended: true}))

app.get(`\produtos`, (req, res, next) => {
    res.send(bancodedados.getprodutos())
})

app.get(`./prpdutos/:id`, (req, res, next) => {
    res.send(bancodedados.getprodutos(req.params.id))
})

app.post(`/produtos`, (req, res, next) => {
    const produto = bancodedados.salvarproduto({
        nome: req.body.nome,
        preso: req.body.preso
    })
    req.send(produto) // transforma em json
})

app.listen(Porta, () => {
    console.log(`Ola Ze Ruela! ${Porta}`)
})