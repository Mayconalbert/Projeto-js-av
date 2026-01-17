{
    var  a = '1' // escopo global 
    let b =  '2' // o let tem escopo de bloco
    console.log(b)
}
console.log(a)

const produto = "caneta" // string com  `` pode quebrar de linha 
console.log(`${produto} 
    E
     bom `)
// destructuring

const [l, e, ...tras] = 'cod3r' // 
console.log(l, e, tras)

const [x, ,y] = [1,2,3]
console.log(x,y)

const {idade: i, nome} = {nome: 'Ana', idade: 9}
console.log(i,nome)