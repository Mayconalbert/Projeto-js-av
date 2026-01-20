for (let i of 'uau'){
    console.log(i)

}

const chaves = ['Map', 'Set', 'Promise']
for (let i in chaves){
    console.log(i)
}

for (let assunto of chaves){
    console.log(assunto)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['set', {abordado: true}],
    ['Prmise1', {abordado: false}]
])

for (let i of assuntosMap){
    console.log(i)
}

for (let [ch, vlr] of assuntosMap.entries()){
    console.log(ch, vlr)
}

for (let chave of assuntosMap.keys()){
    console.log(chave)
 }
 for (let valor of assuntosMap.values()){
    console.log(valor)
 }
 const s = new Set(['a', 'b', 'c'])
 for (let letras of s){
    console.log(letras)
 }