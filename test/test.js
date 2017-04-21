const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('CSS task', function(){
    let build = require('../');

    it('Builds a single CSS file as single.min.css', function(){
        build.css({
            source: path.resolve(__dirname, './data/single.css'),
            name: 'single.css',
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/single.min.css')));
        });
    });

    it('Builds multiple CSS files as multi.min.css', function(){
        let files = [
            path.resolve(__dirname, './data/foo.css'),
            path.resolve(__dirname, './data/bar.css')
        ];

        build.css({
            source: files,
            name: 'multi.css',
            destination: path.resolve(__dirname, './data/results')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/multi.min.css')));
        });
    });

    it('Builds a single CSS file as styles.min.css when no name is provided', function(){
        build.css({
            source: path.resolve(__dirname, './data/single.css'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/styles.min.css')));
        });
    });

    it('Builds multiple CSS files as styles.min.css when no name is provided', function(){
        let files = [
            path.resolve(__dirname, './data/foo.css'),
            path.resolve(__dirname, './data/bar.css')
        ];

        build.css({
            source: files,
            destination: path.resolve(__dirname, './data/results')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/styles.min.css')));
        });
    });
});
