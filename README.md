# ZugZug - Gulp Peon Workers!

This module is for quickly adding some commong Gulp tasks used in web projects.  Work, work.

## Installation & Setup

**Pre-requirements**
* NodeJS
* Gulp

Use ```npm install --save-dev <link-to-this-repo>``` to install zugzug as one of your projects development dependencies.

### Configuration

There is one configuration file you will need to change before you can get going.  Navigate into <project_root>/node_modules/zugzug/config/ and open the paths.js file.  This file contains all of the path configurations Gulp will use for inputs and output for your tasks.  Please update these paths to match your projects layout.

**!important:** These paths are relative to your gulpfile and not path.js

* css
  * source {String || Array} - location of your css files
  * output {String} - where to drop results
  * outputName - what to name the output file (eg. styles.css)
* image
  * source {String || Array} - location of your image files to optimize
  * output {String} - where to drop results
* javascript
  * standard
    * source {String || Array} - location of your javascript files
    * output {String} - where to drop results
    * outputName - what to name the output file (eg. scripts.js)
  * webpack
    * source {String || Array} - location of your javascript files to bundle
    * output {String} - where to drop the results
* sass
  * source {String || Array} - location of your SASS files
  * output {String} - where to drop the results

## How to use

Once everything is installed you will need to create a gulpfile for your project in the main project directory.  Here is a sample gulpfile.js using this modules:

```JavaScript
const gulp = require('gulp');
const build = require('zugzug');

gulp.task('css', build.css);
gulp.task('js', build.javascript);
gulp.task('webpackjs', build.javascript.webpack);
gulp.task('sass', build.sass);
gulp.task('images', build.images);
```

Each task is then invoked from the command line using ```gulp task-name```.  See [gulpjs.com](http://www.gulpjs.com) for more details on the ins and outs of Gulp.

## Tasks

### CSS

The CSS task is included for convenience but it is recommended you use SASS instead since it also supports standard CSS files.  

A CSS prefixer is included to add vendor prefixes to all your styles where needed.  The configuration for this prefixer can be found in "/config/css.js".

If an array of filepaths is provided in the css.source property in "/config/paths.js" these files will be concatenated together into a single file.  The name of this file is taken from css.outputName in "/config/paths.js".

All CSS files passed through this task will be minified.  Both a non-minified and minified file will be placed at the destination and the minified version will be suffixed with ".min".  For example if you have css.outputName set to "styles.css" you will be able to find both "styles.css" and "styles.min.css" in the output directory. 

### Images

Images uses Gulp Imagemin for compression of PNG, JPG, GIF, and SVG files. It will compress all files specified in images.source of "/config/paths.js" and output the compressed results in the path specified in the config.

### JavaScript - Standard

The JavaScript has two flavors in zugzug which are standard and webpack.

The standard task will use configurations javascript.standard of "/config/paths.js".  It will take all files specified in source and concatenate them into a single file specified using the outputName config.

This task will run each script through the Babel transpiler to ensure ES2015 conformity.

This task will also minify the final results and add the suffix ".min", outputing both a minified and uncompressed file.

This task also generates a sourcemap which is dropped in the same location you specify in javascript.standard.output

### JavaScript - Webpack

The webpack protion of zugzug allows for code splitting of your JavaScript so that you don't end up supporting a monolithic beast script.

JavaScript - Webpack has the save features as JavaScript - Standard except the webpack bundler allows for code splitting.  
