# gulp-inject-js-html [![Build Status](https://travis-ci.org/zanjs/gulp-inject-js-html.svg?branch=master)](https://travis-ci.org/zanjs/gulp-inject-js-html)

> A gulp plugin to injects javascript under a script tag

* [Installation](#installation)
* [Usage](#usage)
* [Options](#options)
* [Output](#output)
* [License](#license)

### INSTALLATION

Install using `npm`

```
$ npm install --save-dev gulp-inject-js-html
```

Or using `yarn`

```
$ yarn add --dev gulp-inject-js-html
```

### USAGE

Gulp task example:

```javascript
var gulp = require('gulp');
var injectScripts = require('gulp-inject-js-html');

gulp.task('inject:script', function(){
  return gulp.src('./demo/src/*.html')
    .pipe(injectScripts({
      baseDir "./demo/dist" // SET BASE DIRECTORY
    }))
    .pipe(gulp.dest('./demo/dist'));
});
```

HTML example:

```html
<!doctype html>
<html lang="en">
<head>
    <title>Gulp Inject Scripts</title>
<body>
    <div>Body</div>

    <script src="./test/src/valid-file.js"></script>
</body>
</html>
```

Note: Source path of `script` tag should be relative to `gulpfile.js`

### OPTIONS

| Key   | Type   | Default | Example |
|---|---|---|---|
| `baseDir`   | String  | Project directory  | `./dist` |

### OUTPUT

```html
<!doctype html>
<html lang="en">
<head>
    <title>Gulp Inject Scripts</title>
<body>
    <div>Body</div>

    <script>
    // YOUR SCRIPT COMES HERE
    </script>
</body>
</html>
```

### LICENSE

MIT License

Copyright (c) 2017 Julian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
