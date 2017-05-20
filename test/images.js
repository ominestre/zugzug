const assert = require('assert');
const fs = require('fs');
const path = require('path');

describe('Image Tasks', function(){
    let build = require('../');

    it('Moves a single image to the output directory', function(done){
        build.images({
            source: path.resolve(__dirname, './data/images/peon.jpg'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.jpg')));
            done();
        });
    });

    it('Moves multiple images to the output directory using wildcard selectors', function(done){
        build.images({
            source: path.resolve(__dirname, './data/images/*.*'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.jpg')));
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.1.jpg')));
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.2.jpg')));
            done();
        });
    });

    it('Should pass through non-image files', function(done){
        build.images({
            source: path.resolve(__dirname, './data/images/**/*'),
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
