const gulp = require('gulp');
const config = require('../config/');
const imagemin = require('gulp-imagemin');

module.exports = () => {
    return gulp.src(config.paths.images.source)
        .pipe(imagemin())
        .pipe(gulp.dest(config.paths.images.output));
};
