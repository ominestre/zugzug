const babel = require('gulp-babel');
const babelPreset = require('babel-preset-es2015-script');
const config = require('../config/');
const gulp = require('gulp');
const minify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');

module.exports = () => {
    return gulp.src(config.paths.javascript.webpack.source)
        .pipe(webpack({
            devtool: 'inline-source-map',
            output: {
                filename: config.paths.javascript.webpack.outputName
            }
        }))
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(babel({
            presets: [babelPreset]
        }))
        .pipe(gulp.dest(config.paths.javascript.webpack.output))
        .pipe(minify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write(''))
        .pipe(gulp.dest(config.paths.javascript.webpack.output));
};
