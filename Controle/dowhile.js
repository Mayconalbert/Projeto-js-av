function getinteragir(max, min) {
    const valor = Math.random () * (max - min ) + min 
    return Math.floor(valor)
}
 
let opcao = -1
do {
    opcao = getinteragir(-1 , 10) 
    console.log(`Opção escolhido foi ${opcao}.`)

} while (opcao != -1)
console.log('ate a proxima!')