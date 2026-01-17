const quasearray = { 0:'Joao', 1:'Maicon', 2:'Bia'}
console.log(quasearray)
Object.defineProperties(quasearray,'tostrig',{
  value: function(){ return Object.values(this) },
  enumerable: false   
})

console.log(quasearray[0])

// Aplicacao nao rodou