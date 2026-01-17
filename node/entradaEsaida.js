const anomino = process.argv.indexOf('-a') !== -1
// console.log(anomino)

if (anomino) {
    process.stdout.write('Fala Zezinho!\n')
    process.exit()
 
}

else{
   process.stdout.write('Informe seu nome: ')
   process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
         process.stdout.write(`Fala ${nome} !!\n`)
         process.exit()
   })
}
