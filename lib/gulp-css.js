const config = require('../config/');
const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const minify = require('gulp-cssnano');
const rename = require('gulp-rename');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(prefixer(config.css.prefixer))
            .pipe(concat(options.name || 'styles.css'))
            .pipe(minify())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
