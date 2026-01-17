const fabricante = ['Mercedes', 'BMW', 'Audio']

function imprimir (incio, nome){
    console.log(`${nome}, ${incio}`)
}
fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante))