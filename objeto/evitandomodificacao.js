const produto = Object.preventExtensions({
    nome: 'Caneta', preso: 1.70, tag: 'Promocao'
})
console.log(`Estencivel:`, Object.isExtensible(produto) )

produto.nome = 'Borracha'
produto.adicionar = 1234
delete produto.tag
console.log(produto)

// Selamento: poderar so mudar o valor da variavel

const pessoa = { nome: 'Juliana', idade: 30}
Object.seal(pessoa)
console.log(`Selado:`, Object.isSealed(pessoa) )

pessoa.nome = 'Barbara'
delete pessoa.nome
pessoa.sobrenome = 'Albert'
pessoa.nome = 'Maicon'
console.log(pessoa)