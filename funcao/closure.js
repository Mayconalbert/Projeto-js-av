//closure é o escopo criado quando uma funcao é declarada
// essa escopo permitea funcao acessar e manipular variavel externas da funcao

const x = 'Global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
       
}    
return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())