const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('CSS task', function(){
    let build = require('../');

    it('Builds a single CSS file as single.min.css', function(done){
        build.css({
            source: path.resolve(__dirname, './data/css/single.css'),
            name: 'single.css',
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/single.min.css')));
            done();
        });
    });

    it('Builds multiple CSS files as multi.min.css', function(done){
        let files = [
            path.resolve(__dirname, './data/css/foo.css'),
            path.resolve(__dirname, './data/css/bar.css')
        ];

        build.css({
            source: files,
            name: 'multi.css',
            destination: path.resolve(__dirname, './data/results')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/multi.min.css')));
            done();
        });
    });

    it('Builds a single CSS file as styles.min.css when no name is provided', function(done){
        build.css({
            source: path.resolve(__dirname, './data/css/single.css'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/styles.min.css')));
            done();
        });
    });

    it('Builds multiple CSS files as styles.min.css when no name is provided', function(done){
        let files = [
            path.resolve(__dirname, './data/css/foo.css'),
            path.resolve(__dirname, './data/css/bar.css')
        ];

        build.css({
            source: files,
            destination: path.resolve(__dirname, './data/results')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/styles.min.css')));
            done();
        });
    });
});
