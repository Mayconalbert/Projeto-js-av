const abj1 = 0
const obj2 = 2
const obj3 = 8

const a = {abj1: abj1, obj2: obj2, obj3: 9} // as duas forma de fazer, tem como fazer auteraçao
const b = {abj1, obj2, obj3}
console.log(a, b)

const nota = 'notas'
const valor = 7.89

const obj4 = {}
obj4[nota] = valor
console.log(obj4)

const obj5 = {[nota]: valor} // Sao as duas forma de fazer, essa é a mais atual 2015
console.log(obj5)

const objt6 = {
    funcao: function (){

    },
    funcao1 () {}// As duas forma de fazer 
}
console.log(objt6)