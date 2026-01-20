//ES8: Objct.values e objct.entries
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhoria na notacao literal

const nome = 'Maicon'
const pessoa = {
    nome, 
    ola () {
        return 'Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

// class
class animal {}
class cachorro extends animal {
    falar (){
        return 'Au au!'
    }
}
console.log(new cachorro().falar())

