function Meuobjt() {
    console.log(Meuobjt.prototype)

}

const objt1 = new Meuobjt
const obtj2 = new Meuobjt
console.log(objt1.__proto__ === obtj2.__proto__ )
console.log(Meuobjt.prototype === objt1.__proto__)
Meuobjt.prototype.nome = 'Ana'
Meuobjt.prototype.falar = function () {

    console.log(`Bom dia meu nome é ${this.nome}`)
}

objt1.falar()

objt1.nome = 'Barbara'
objt1.falar()

const objt3 = {}
    objt3.__proto__ = Meuobjt.prototype
    objt3.nome = 'obt3'
    objt3.falar()


console.log((new Meuobjt).__proto__ === Meuobjt.prototype)
//console.log(Meuobjt.__proto__ === function.prototype)
//console.log(function.prototype.__proto__=== Object.prototype)