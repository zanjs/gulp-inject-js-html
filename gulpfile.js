var gulp = require('gulp');
var injectScripts = require('./index.js');

gulp.task('scripts', function(){
  return gulp.src('./demo/src/*.js')
    .pipe(gulp.dest('./demo/dist'));
});

gulp.task('templates', function(){
  return gulp.src('./demo/src/*.html')
    .pipe(injectScripts({
      baseDir: "./demo/dist"
    }))
    .pipe(gulp.dest('./demo/dist'));
});

gulp.task('default', ['scripts'], function(){
  gulp.start('templates');
});
