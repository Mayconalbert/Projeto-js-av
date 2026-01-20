const muduloA = require('../../moduloA')
console.log(muduloA.ola)
const http = require('http')
http.createServer((rep, res) => {
    res.write('Ola mundo')
    res.end()

}).listen(8080)