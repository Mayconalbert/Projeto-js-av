const produto = [
    {nome: 'Notebook', preso: 2900, marca: true },
    {nome: 'Ap di', preso: 4900, marca: true},
    {nome: 'cll', preso: 2000, marca: false},
    {nome: 'Copo de vidro', preso: 21, marca: true},
    {nome: 'Copo de barchico', preso: 12, marca: false}
]
console.log(produto.filter(function(p){
    return true

}))

const caro = produto => produto.preso >= 500
const marca = produto => produto.marca

console.log(produto.filter(caro).filter(marca))