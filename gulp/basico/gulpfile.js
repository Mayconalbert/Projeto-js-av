const gulp = require('gulp')
const series = gulp.series

function copiar(cd) {
    console.log('Tarefa de copiar')
    return cd()
}

module.exports.default = series(copiar)