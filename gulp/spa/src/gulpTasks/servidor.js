const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { appHTML, appCSS, appJS, appIMG} = require('./app')

function servidor(cb) {
    return gulp.src('build')
    .pipe(webserver({
        port: 8080,
   
        open: true,
       livereload: true,
    //   fallback: './app/index.html',
    //    directoryListing: false
    }))
}

function manterArquivo(cb) {
    gulp.watch('src/**/*.html', gulp.series(appHTML))
    gulp.watch('src/**/*.scss', gulp.series(appCSS))
    gulp.watch('src/**/*.js', gulp.series(appJS))
    gulp.watch('src/assets/imgs/**/*.*', gulp.series(appIMG))

    return cb()
}

module.exports = {
    servidor,
    manterArquivo
}