const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const babelPreset = require('babel-preset-es2015-script');
const concat = require('gulp-concat');
const minify = require('gulp-uglify');
const rename = require('gulp-rename');
const cached = require('gulp-cached');
const remember = require('gulp-remember');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(cached('javascript'))
            .pipe(babel({
                presets: [babelPreset]
            }))
            .pipe(minify())
            .pipe(remember('javascript'))
            .pipe(concat(options.name || 'scripts.js'))
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
