function esperarpor(segundo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), segundo)
    })
}

esperarpor(3000)
    .then(() =>  console.log('Executando-1...'))
    .then(esperarpor)
    .then(() => console.log('Executando Promise-2...'))
    .then(esperarpor)
    .then(() => console.log('Executando Promise-3...'))
    .then(esperarpor)

   async function retonarvalor() {
        return 20
    }
            
 async function executar() {
    let valor = await retonarvalor()
       await esperarpor(1500)
        console.log(`Async/await ${valor}...`)

        await esperarpor(1500)
        console.log(`Async/await ${valor + 1}...`)
        await esperarpor(1500)
        console.log(`Async/await ${valor + 2}...`)
        return valor + 3

    
 }
  async function executarvalor() {
            const valor = await executar()
            console.log(valor)

        }
       
 executarvalor()