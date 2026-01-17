Array.prototype.forEach2 = function(calback){
    for(let i = 0; i < this.length; i ++){
        calback(this[i], i, this)

    }
}

const aprovados = ['maicon', 'joao', 'bia', 'fernando']
aprovados.forEach2(function(nome, indice, Array){
    console.log(`${indice + 1} ${nome}`)
    console.log(Array)

})