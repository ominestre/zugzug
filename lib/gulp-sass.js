const config = require('../config/');
const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = () => {
    gulp.src(config.paths.sass.source)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer(config.css.prefixer))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(config.paths.sass.output))
}
