const gulp = require('gulp')
const { series, parallel } = gulp

const { appHTML, appJS, appCSS, appIMG } = require('./src/gulpTasks/app')
const { despCSS, despFonts } = require('./src/gulpTasks/desp')
const { manterArquivo, servidor } = require('./src/gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appJS, appCSS, appIMG),
        series(despCSS, despFonts)
    ),
    servidor,
    manterArquivo
)