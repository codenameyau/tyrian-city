'use strict';

/********************************************************************
* DEPENDENCIES
*********************************************************************/
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var util = require('gulp-util');
var babelify = require('babelify');
var browserify = require('browserify');
var rimraf = require('rimraf');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

var SHEETS = 'public/assets/css/**/*.css';
var VENDOR = 'public/assets/lib/**/*.js';
var SOURCE = 'public/tyrian-city/**/*.js';
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
  gulp.src(SOURCE)
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
    .on('error', util.log.bind(util, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify(UGLIFY_OPTS))
    .pipe(gulp.dest(BUILD_JS));
});

gulp.task('build', ['css', 'vendor', 'scripts']);

gulp.task('default', ['build']);
