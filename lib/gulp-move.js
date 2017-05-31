const gulp = require('gulp');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
