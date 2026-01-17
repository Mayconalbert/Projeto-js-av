console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}
console.log('Escola cod3'.reverse())

Array.prototype.filter = function() {
    return this[0]
}

console.log([1,2,3,4].filter())
console.log(['a','b','c','d'].filter())

String.prototype.toString = function (){
    return 'Lascou tudo'
}
console.log('Escola cod3'.reverse())