# ZugZug - Gulp Peon Workers!

This module is for quickly adding some common Gulp tasks used in web projects.  Work, work.

## Installation & Setup

**Pre-requirements**
* NodeJS
* Gulp

Use ```npm install --save-dev <link-to-this-repo>```  or ```npm install --save-dev @ominestre/zugzug``` to install zugzug as one of your projects development dependencies.

## How to use

Each function of ZugZug takes a configuration object with the following properties:
* **source** {Array | String} - path to your source files relative to gulpfile.js
* **destination** {String} - where to drop the processed files relative to gulpfile.js
* **name** {String} - **OPTIONAL**
  * This is the name of your output file.  Not required for images.
  * During minification ".min" will be suffixed onto the name.  So if you specify "bundle.js" the final output will be "bundle.min.js".

You will need to create a gulpfile in your primary project directory and pass in the configurations for each task.  Here is a sample gulpfile.js using this module with JavaScript and CSS builds:

```JavaScript
const gulp = require('gulp');
const build = require('@ominestre/zugzug');

gulp.task('css', () => {
  build.css({
    source: './path/to/css/test.css',
    name: 'work-complete.css',
    destination: './build/more/farms/'
  });
}));

gulp.task('js', () => {
  build.js({
    source: './what/you/want.js',
    destination: './stop/poking/me/'
  });
});
```

Each task is then invoked from the command line using ```gulp task-name```.  See [gulpjs.com](http://www.gulpjs.com) for more details on the ins and outs of Gulp.

**!important** Don't use array notation to pass params into the function due to the JavaScript object having a stowaway for webpack.

```JavaScript
gulp.task('js', build.javascript[{
  //this is a lazy peon and won't work
}]);
```

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
