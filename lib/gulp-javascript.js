const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const babelPreset = require('babel-preset-es2015-script');
const concat = require('gulp-concat');
const minify = require('gulp-uglify');
const rename = require('gulp-rename');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: [babelPreset]
            }))
            .pipe(concat(options.name || 'scripts.js'))
            .pipe(minify())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
