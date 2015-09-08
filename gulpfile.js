'use strict';

/********************************************************************
* DEPENDENCIES
*********************************************************************/
var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var mincss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var rimraf = require('rimraf');

var SHEETS = 'public/assets/css/**/*.css';
var VENDOR = 'public/assets/lib/**/*.js';
var SOURCE = 'public/tyrian-city/**/*.js';
var BUILD = 'public/build';
var BUILD_CSS = BUILD + '/css';
var BUILD_JS = BUILD + '/js';


/********************************************************************
* GULP TASKS
*********************************************************************/
gulp.task('clean', function(cb) {
  rimraf(BUILD, cb);
});

gulp.task('css', function() {
  gulp.src(SHEETS)
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(mincss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(BUILD_CSS));
});

gulp.task('vendor', function() {
  gulp.src(VENDOR)
    .pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest(BUILD_JS));
});

gulp.task('scripts', function() {
  gulp.src(SOURCE)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(BUILD_JS));
});

gulp.task('build', ['css', 'vendor', 'scripts']);

gulp.task('default', ['build']);
