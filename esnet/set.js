// set nao aceta repeticao de valores

const times = new Set()
times.add('vasco')
times.add('flamengo').add('corinthians').add('flamengo')
times.add('palmeiras')
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))


const nomes = ['Maicon', 'Ana', 'Joao', 'Ana', 'Maicon']
const nomesset = new Set(nomes)
console.log(nomesset)