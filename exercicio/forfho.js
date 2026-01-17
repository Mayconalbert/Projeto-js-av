const aprovados = [ 'Ana', 'Maicon', 'Joao','Bia']
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)

})
aprovados.forEach(nome => console.log(nome))
aprovados.forEach(indice => console.log(indice))
const exibiraprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibiraprovados)
