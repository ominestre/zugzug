# ZugZug - Gulp Peon Workers!

This module is for quickly adding some common Gulp tasks used in web projects.  Work, work.

[![Build Status](https://travis-ci.org/ominestre/zugzug.svg?branch=master)](https://travis-ci.org/ominestre/zugzug)
[![Coverage Status](https://coveralls.io/repos/github/ominestre/zugzug/badge.svg?branch=master)](https://coveralls.io/github/ominestre/zugzug?branch=master)
[![Gitter chat](https://badges.gitter.im/gitterHQ/gitter.png)](https://gitter.im/ominestre-zugzug/Lobby)

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

**Standalone**

The CSS task is included for convenience and legacy support but it is recommended that you adopt SASS instead.

This task features file concatenation of all specified CSS files, auto-prefixing, generates a sourcemap, and minification.

```JavaScript
const build = require('@ominestre/zugzug');

build.css({
  source: '/path/to/files/*.css',
  destination: '/path/to/destination/',
  name: 'optional.file.name' //defaults to styles.css if not specified
});
```

### SASS

**Does not include minification and concetenation.  Chain CSS task after.**

This will compile all of your SASS files.  It will also run each through an auto-prefixer and generate source maps.  For minification it is recommended that you chain the output of this into the CSS task (example below);

```JavaScript
const build = require('@ominestre/zugzug');

build.sass({
  source: '/path/main.scss',
  destination: '/path/to/destination/'
}).on('end', () => {
  build.css({
    source: '/path/to/destination/main.scss',
    destination: '/path/to/destination/',
    name: 'sass-demo.css'
  });
})
```


### Images

**Standalone**

Images uses Gulp Imagemin for compression of PNG, JPG, GIF, and SVG files. It will compress all files specified in source.  If you use a wild card it will simply pass through all non-image files to the specified destination.

```JavaScript
const build = require('@ominestre/zugzug');

build.images({
  source: '/path/to/images/*.*',
  destination: '/path/to/destination/'
});
```

### JavaScript - Standard

**Standalone**

With ZugZug, JavaScript handling comes in two flavors.  Standard has concatenation of files, babel for ES5 support, sourcemapping, and minification.  Webpack is the same as standard with Webpack added for code splitting.

```JavaScript
const build = require('@ominestre/zugzug');

build.javascript({
  source: '/path/to/files/*.js',
  destination: '/path/to/destination/',
  name: 'optional.output.name' //uses scripts.js if not specified
});
```

### JavaScript - Webpack

**Standalone**

The webpack protion of zugzug allows for code splitting of your JavaScript so that you don't end up supporting a monolithic beast script.

To use simply point it to your primary file you wish to bundle like so:

```JavaScript
const build = require('@ominestre/zugzug');

build.javascript.webpack({
  source: '/path/to/main-js-file.js',
  destination: '/path/to/destination/',
  name: 'optional.output.name' //uses bundle.js if not specified
});
```

### Zipper

**Standalone**

Creates a zip file.  Or maybe it alerts you when you leave your fly down after taking a whiz.

```JavaScript
const build = require('@ominestre/zugzug');

build.zipper({
  source: '/path/to/files/**/*.*',
  destination: '/path/to/destination/',
  name: 'optional.file.name' //defaults to zippity.zip if not specified
})
```

### Mover

**Standalone**

This is just a simple file mover, equivalent of the mv command.

```JavaScript
const build = require('@ominestre/zugzug');

build.mv({
  source: '/path/to/files/*',
  destination: '/path/to/destination/'
});
```
