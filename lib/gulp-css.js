const config = require('../config/');
const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const minify = require('gulp-cssnano');
const rename = require('gulp-rename');

module.exports = () => {
    gulp.src(config.paths.css.source)
        .pipe(prefixer(config.css.prefixer))
        .pipe(concat(config.paths.css.outputName))
        .pipe(gulp.dest(config.paths.css.output))
        .pipe(minify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.paths.css.output));
}
