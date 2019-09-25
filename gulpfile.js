const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

//compile scc into css

function style(){
    //find scss file
    return gulp.src('./scss/**/*.scss')
    // pass that file through the sass compiler
    .pipe(sass().on('error', sass.logError))
    // where do I save the compiled CSS file
    .pipe(gulp.dest('./css'))
    //stream changes to all browsers
    .pipe(browserSync.stream());
}


function watch(){
    browserSync.init({
        server:{
            baseDir:'./'
        }
    });
    gulp.watch('./scss/**/*.scss', style)
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch= watch;
