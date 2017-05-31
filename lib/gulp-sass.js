const config = require('../config/');
const gulp = require('gulp');
const prefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

module.exports = (options) => {
    return new Promise((resolve, reject) => {
        gulp.src(options.source)
            .pipe(sourcemaps.init())
            .pipe(sass())
            .on('error', reject)
            .pipe(prefixer(config.css.prefixer))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
