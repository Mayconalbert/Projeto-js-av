Array.prototype.map2 = function(callback){
    const newarray = []
    for(let i = 0; i < this.length; i++ ){
        newarray.push(callback(this[i], i , this))

    }
    return newarray
}
const carrinho = [
    '{"nome": "borracha", "preso": 3.45}',
    '{"nome": "caderno", "preso": 13.00}',
    '{"nome": "kit de lapis", "preso": 41.22}',
    '{"nome": "caneta", "preso": 7.50}'

]
const paraObjeto = json => JSON.parse(json)
const apenaspreso = produto => produto.preso

const resultado = carrinho.map2(paraObjeto).map2(apenaspreso)
console.log(resultado)