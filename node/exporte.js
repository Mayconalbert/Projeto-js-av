console.log(module.exports === this)
console.log(module.exports === exports)

exports.a = 1
module.exports.b = 2
this.c = 3
exports = null

console.log(module.exports)

exports = {
    nome: 'Ola'
}

console.log(module.exports)

module.exports = {Problico: true}