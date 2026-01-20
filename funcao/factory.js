function criarproduto(Name, idade){
    return{
        Name,
        idade,
        desconto: 0.1
    }
}

console.log(criarproduto('Notebook', 2000))
console.log(criarproduto('iped', 5000))