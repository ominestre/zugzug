const babel = require('gulp-babel');
const babelPreset = require('babel-preset-es2015-script');
const gulp = require('gulp');
const minify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(webpack({
                devtool: 'inline-source-map',
                output: {
                    filename: options.name || 'bundle.js'
                }
            }))
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(babel({
                presets: [babelPreset]
            }))
            .pipe(gulp.dest(options.destination))
            .pipe(minify())
            .pipe(rename({suffix: '.min'}))
            .pipe(sourcemaps.write(''))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
};
