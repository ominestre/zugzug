const assert = require('assert');
const fs = require('fs');
const path = require('path');
const rummerf = require('@ominestre/rummerf');
let build = require('../');

describe('CSS task', function(){
    it('Builds a single CSS file as single.min.css', function(done){
        build.css({
            source: path.resolve(__dirname, './data/css/single.css'),
            name: 'single.css',
            destination: path.resolve(__dirname, './data/results/')
        }).then(() => {
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
        }).then(() => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/multi.min.css')));
            done();
        });
    });

    it('Builds a single CSS file as styles.min.css when no name is provided', function(done){
        build.css({
            source: path.resolve(__dirname, './data/css/single.css'),
            destination: path.resolve(__dirname, './data/results/')
        }).then(() => {
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
        }).then(() => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/styles.min.css')));
            done();
        });
    });

    xit('Matches an expected output when building a singlke CSS file');
    xit('Matches an expected output when building multiple CSS files');

    afterEach(() => {
        rummerf(path.resolve(__dirname, './data/results/'));
    });
});

describe('SASS tasks', () => {
    xit('Throws an error when attempting to compile a SASS file with syntax errors', () => {
        assert.throws((done) => {
            build.sass({
                source: path.resolve(__dirname, './data/sass/bad/*.scss'),
                destination: path.resolve(__dirname, './data/results')
            }).then(() => {
                done()
            }, /SASS compiler error/);
        });
    });

    xit('Compiles SASS', (done) => {
        build.sass({
            source: path.resolve(__dirname, './data/sass/good/*.scss'),
            destination: path.resolve(__dirname, './data/results')
        }).then(() => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/good.css')));
            done();
        });
    });

    xit('Matches an expected output when building SASS');

    afterEach(() => {
        let results = path.resolve(__dirname, './data/results/');

        if(fs.existsSync(results)){
            rummerf(results);
        }
    });
});
