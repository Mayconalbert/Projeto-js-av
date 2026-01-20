let comparacomthis = function (param){
    console.log(this === param)

}
comparacomthis(global)

const obj = {}
comparacomthis = comparacomthis.bind(obj)
comparacomthis(obj)
comparacomthis(global)

let comparacomthisArraw = param => console.log(this === param)
comparacomthisArraw(global)
comparacomthisArraw(module.exports)
comparacomthisArraw = comparacomthisArraw.bind(obj)
comparacomthisArraw(global)
comparacomthisArraw(module.exports)