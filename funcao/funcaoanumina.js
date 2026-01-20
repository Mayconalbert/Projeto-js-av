const soma = function (y, x){
    return y + x
}
const imprimirresultado = function (a, b, operacao = soma ){
    console.log(operacao(a,b))
}
imprimirresultado(3,4)
imprimirresultado(3,4, soma)
imprimirresultado(3, 4, function (y, x){
    return y - x
})
imprimirresultado(3, 4, (y, x) => y - x)
const pessoa = {
    falar: function(){
        console.log('opa')
    }
}
pessoa.falar()
const pessoa1 = {
    falar(){
        console.log('Opa')
    }
}
pessoa1.falar()