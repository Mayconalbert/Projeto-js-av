function getIndealeatorio(min, max) {
    const valor = Math.random () * (max - min ) + min
    return Math.floor(valor)

  


}
 let opcao = -1

 while (opcao != 0) {
    opcao = getIndealeatorio(-1 , 10)
    console.log(`Opção escolhido foi ${opcao}.`)

 }
 console.log('ate a proxima!')