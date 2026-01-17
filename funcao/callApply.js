function getPreso(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preso * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preso: 4589,
    desc: 0.15,
    getPreso

}

global.preso = 20
global.desc = 0.1
console.log(getPreso())
console.log(produto.getPreso())

const carro = {
    preso: 49990,
    desc: 0.17
}
console.log(getPreso.call(carro))
console.log(getPreso.apply(carro))
console.log(getPreso.call(carro, 0.17, '$'))
console.log(getPreso.apply(carro, [0,17, '$']))