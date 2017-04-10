// IMPORTANT:  These paths are relative to where the Gulp binary is used not this file
module.exports = {
    css: {
        source: ['./**/*.css'],
        output: './app/dist/css/',
        outputName: 'styles.css'
    },
    images: {
        source: ['./**/*.*'],
        output: './app/dist/img/'
    },
    javascript: {
        standard: {
            source: ['./**/*.js'],
            output: './app/dist/js/',
            outputName: 'scripts.js'
        },
        webpack: {
            source: ['./src/webpack/main.js'],
            output: './app/dist/js/',
            outputName: 'bundle.js'
        }
    },
    sass: {
        source: './**/*.scss',
        output: './app/dist/css/'
    }
}
