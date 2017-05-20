const gulp = require('gulp');

module.exports = (options) => {
    return gulp.src(options.source)
        .pipe(gulp.dest(options.destination));
}
