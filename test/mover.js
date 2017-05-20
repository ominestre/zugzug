const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('File Mover Task', () => {
    const build = require('../');

    it('Should move a single file to the output directory', (done) => {
        build.mv({
            source: path.resolve(__dirname, './data/images/peon.jpg'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.jpg')));
            done();
        });
    });

    it('Should move multiple files to the output directory', (done) => {
        build.mv({
            source: path.resolve(__dirname, './data/images/**/*.*'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.jpg')));
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.1.jpg')));
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.2.jpg')));
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/not-image/not-image.js')));
            done();
        });
    });

    afterEach(() => {
        let results = path.resolve(__dirname, './data/results/');

        if(fs.existsSync(results)){
            require('@ominestre/rummerf')(results);
        }
    });
});