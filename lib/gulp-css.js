const config = require('../config/');
const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const minify = require('gulp-cssnano');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(prefixer(config.css.prefixer))
            .pipe(minify())
            .pipe(concat(options.name || 'styles.css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
