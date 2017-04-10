const gulp = require('gulp');
const config = require('../config/');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const babelPreset = require('babel-preset-es2015-script');
const concat = require('gulp-concat');
const minify = require('gulp-uglify');
const rename = require('gulp-rename');

module.exports = () => {
    gulp.src(config.paths.javascript.standard.source)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: [babelPreset]
        }))
        .pipe(concat(config.paths.javascript.standard.outputName))
        .pipe(gulp.dest(config.paths.javascript.standard.output))
        .pipe(minify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(config.paths.javascript.standard.output));
}
