function soma() {
    let soma = 0
    for (let i in arguments){
        soma += arguments[i]

    }
    return soma

}
console.log(soma())
console.log(soma(1))
console.log(soma(1.2,2.3,2.4,3,7,8))
console.log(soma('a', 'b', 'm'))
console.log(soma( ' FFIM'))
