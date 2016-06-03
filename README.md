# gulp-upyet
Gulp task meant to be used as a prerequisite for running tests. It requests against a host a specified amount of times before giving up.

[![NPM](https://nodei.co/npm/gulp-upyet.png)](https://npmjs.org/package/gulp-upyet)

## Installation

```
npm install isitupyet --save-dev
```

## Usage

```JavaScript
var upyet = require('gulp-upyet')('http://dev.thingtotest.com', 5);

gulp.task('devRunning', upyet);

gulp.task('integrationTests', ['devRunning'], function () {
  // tests
});
```

## License
ISC
