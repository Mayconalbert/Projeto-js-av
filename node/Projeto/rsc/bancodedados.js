const sequece = {
    _id: 1,
    get id() { return this.id++}
}

const produtos = {}

function salvarproduto(produto){
    if(!produto.id) produto.id = sequece.id
    produtos[produto.id] = produto
    return produto
}
 function getproduto(id){
    return produtos[id] || {}
 }

 function getprodutos() {
    return object.values(produtos)
 }