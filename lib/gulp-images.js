const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(imagemin())
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
};
