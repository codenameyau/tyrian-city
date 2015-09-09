'use strict';

/********************************************************************
* DEPENDENCIES
*********************************************************************/
var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var mincss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var watch = require('gulp-watch');
var babelify = require('babelify');
var browserify = require('browserify');
var rimraf = require('rimraf');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var SHEETS = 'public/assets/css/**/*.css';
var VENDOR = 'public/assets/lib/**/*.js';
var SCRIPTS = 'public/tyrian-city/**/*.js';
var INDEX = 'public/tyrian-city/city/main.js';
var BUILD = 'public/build';
var BUILD_CSS = BUILD + '/css';
var BUILD_JS = BUILD + '/js';
var UGLIFY_OPTS = { mangle: false };


/********************************************************************
* GULP TASKS
*********************************************************************/
gulp.task('clean', function(cb) {
  rimraf(BUILD, cb);
});

gulp.task('compile', function() {
  gulp.src(SCRIPTS)
    .pipe(babel())
    .pipe(concat('app.compiled.js'))
    .pipe(gulp.dest(BUILD_JS));
});

gulp.task('css', function() {
  gulp.src(SHEETS)
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(mincss())
    .pipe(gulp.dest(BUILD_CSS));
});

gulp.task('css:watch', function() {
  watch(SHEETS, function() {
    gulp.src(SHEETS)
      .pipe(concat('style.css'))
      .pipe(autoprefixer())
      .pipe(gulp.dest(BUILD_CSS));
  });
});

gulp.task('vendor', function() {
  gulp.src(VENDOR)
    .pipe(concat('vendor.js'))
    .pipe(uglify(UGLIFY_OPTS))
    .pipe(gulp.dest(BUILD_JS));
});

gulp.task('scripts', function() {
  browserify(INDEX, { debug: true })
    .add(require.resolve('babel/polyfill'))
    .transform(babelify)
    .bundle()
    .on('error', function (error) {
      util.log(util.colors.red('Browserify Error\n') + error.toString());
      this.end();
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify(UGLIFY_OPTS))
    .pipe(gulp.dest(BUILD_JS));
});

gulp.task('scripts:watch', function() {
  watch(SCRIPTS, function() {
    browserify(INDEX, { debug: true })
      .add(require.resolve('babel/polyfill'))
      .transform(babelify)
      .bundle()
      .on('error', function (error) {
        util.log(util.colors.red('Browserify Error\n') + error.toString());
        this.emit('end');
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest(BUILD_JS));
  });
});

gulp.task('watch', ['css:watch', 'scripts:watch']);

gulp.task('build', ['css', 'vendor', 'scripts']);

gulp.task('default', ['build']);
