const carrinho = [
    '{"nome": "borracha", "preso": 3.45}',
    '{"nome": "caderno", "preso": 13.00}',
    '{"nome": "kit de lapis", "preso": 41.22}',
    '{"nome": "caneta", "preso": 7.50}'

]
const paraObjeto = json => JSON.parse(json)
const apenaspreso = produto => produto.preso

const resultado = carrinho.map(paraObjeto).map(apenaspreso)
console.log(resultado)