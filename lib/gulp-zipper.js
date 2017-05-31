const gulp = require('gulp');
const zip = require('gulp-zip');

module.exports = (options) => {
    return new Promise(resolve => {
        gulp.src(options.source)
            .pipe(zip(options.name || 'zippity.zip'))
            .pipe(gulp.dest(options.destination))
            .on('end', resolve);
    });
}
