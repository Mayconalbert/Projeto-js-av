

function esperarpor(segundo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('Executando Promise...')
            resolve('vhiss')
        }, segundo)
    })
}
esperarpor(3000).then(texto => console.log(texto)
)

esperarpor()
    .then( () => esperarpor())
    .then(esperarpor)

setTimeout(function(){
    console.log('Executando Timeout')
    setTimeout(function(){
        console.log('Executando timeout')
        setTimeout(function(){
            console.log('Executando timeout')
        },2000)
    }, 2000)
}, 2000)