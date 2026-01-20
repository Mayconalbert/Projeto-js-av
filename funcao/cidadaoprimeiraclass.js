// Criar de forma literal 
function fun1 ( ) {}
// Armazenar em uma  variavel
const fun2 = function (){};
// Armazenar em um array 
const Array = [function (a,b) {return a * b}, fun1, fun2];
console.log(Array[0](2,3))
// Armazenar em um atributos de objeto
 const obj = {}
obj.hl = function() {return {'Hello': 'world'}}
console.log(obj.hl())
// Passar função como parametro
function run(fun){
    fun()
}
 run( function(){ console.log('executando...')})
 // Uma funçao poderar retornar/conter uma funnção
 function soma(a,b) {
    return function(c){
        console.log(a + b + c)
    }
 }
soma(2,3)(5)
const cincomais = soma (1,2)
cincomais(5)