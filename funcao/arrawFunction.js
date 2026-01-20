let dobro = function (a) {
    return  2 * a
}
console.log(dobro(Math.PI))

dobro = (a) =>{
    return 3 * a
} 
dobro = a => 4 * a 
console.log(dobro(Math.PI))

let ola = function () {
    return 'ola'

}

ola = () => 'ola'
ola = _ => 'Ola'
console.log(ola())