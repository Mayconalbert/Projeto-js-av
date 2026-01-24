const primeiroelemento = arrayoustring => arrayoustring[0]
const letraminuscula = letra => letra.toLowerCase()

new Promise(function(resolver) {
    resolver(['Ana', 'Bia', 'Carla', 'Daniel'])
} )

.then(primeiroelemento)
.then(primeiroelemento)
.then(letraminuscula)
.then(console.log)