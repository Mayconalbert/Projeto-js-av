const pessoa = {
    nome: 'ana',
    idade: 5,
    endereso: {
        logadouro: "rua abc",
        numero: 1000

    }
}
const {nome, idade } = pessoa
    console.log(nome, idade)
//const {logadouro, numero} = pessoa.endereso
//console.log(logadouro, numero)
const {sobrenome, bemhumorada = true} = pessoa
    console.log(sobrenome, bemhumorada)
const {nome: n, idade: i} = pessoa
    console.log(n,i)
const {endereso: {logadouro, numero, cep}  } = pessoa
console.log(logadouro,numero,cep)