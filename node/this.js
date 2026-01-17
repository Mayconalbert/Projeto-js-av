console.log(this === global)
console.log(this === module.exports)
console.log(this === exports)


// this dentro do modulo aponta para module.exports

    function Opsthis(){
        console.log(this === global)
        console.log(this === module.exports)
        console.log(this === exports)
    }
    Opsthis()

    // this dentro de uma funcao aponta para o objeto global 