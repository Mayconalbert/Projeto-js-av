// Sem promise

//codigo nao foncionou !!!

const https = require('https')

const getturma = (letras, callback) => {
    const url = `https://files.cod3r.com.br/cruso-js/turma${letras}.json`
    https.get(url, res => {
        let resultado = ''
        res.on('data', dados => {
            resultado += dados
           
        })
        res.on('end', () => {
            try {
            const json = JSON.parse(resultado)
            callback(json)
            } catch (e) {
                console.error('Erro ao converte')
                console.log(resultado)
            }
            
        })
    })
    .on(error, err => 
        {console.error('Erro na requisicao', err.message)

        })
}
let nomes = []
getturma('A', alunos => {
    console.log(alunos)
})