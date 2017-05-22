const assert = require('assert');
const path = require('path');
const fs = require('fs');

describe('ZugZug initialization and usage tests', () => {
    it('Runs tasks normally using the config object if no config file is specified', (done) => {
        let build = require('../');

        build.mv({
            source: path.resolve(__dirname, './data/images/peon.jpg'),
            destination: path.resolve(__dirname, './data/results/')
        }).on('end', () => {
            assert.ok(fs.existsSync(path.resolve(__dirname, './data/results/peon.jpg')));
            done();
        });
    });

    xit('Throws an exception when neither a config file or config object is used', () => {});
    xit(`Throws an exception when an incomplete config file is used and the application can't find a setting for a task`, () => {});

    describe('Using a config file', () => {
        xit('Constructs and returns an object with the settings of your config file', () => {});
        xit('Throws an exception when the file does not exist', () => {});
        xit('Throws an exception when the file cannot be read', () => {});
        xit('Throws an exception when the file is the wrong filetype', () => {});
        xit('Overrides the config file when a config object is passed', () => {});
    });

    afterEach(() => {
        let results = path.resolve(__dirname, './data/results/');

        if(fs.existsSync(results)){
            require('@ominestre/rummerf')(results);
        }
    });
});
