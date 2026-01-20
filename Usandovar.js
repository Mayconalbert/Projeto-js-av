function teste(){
    var a = 123
    console.log(a)
}
teste()
// A diferencia entre var e let
// var tem espaso global e local
// let tem espaso local de bloco
var numero = 1 
{
    var numero = 2
    console.log('Dentro =', numero)

}
console.log('Fora =', numero)

let umero = 2 
{
    let umero2 = 3// O resultado sera 2 pq o let vai pegar o valor do topo
    console.log('Dentro =', umero)
}
console.log('Fora =', umero)
