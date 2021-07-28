'use strict';

const { src, dest, task, watch, parallel} = require('gulp'),
babel = require('gulp-babel'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass')(require('sass')),
concat = require('gulp-concat'),
sourcemaps = require('gulp-sourcemaps');

function buildSass(cb){
    return src(['assets/**/*.sass', 'assets/*.sass'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write(''))
        .pipe(dest('build/'));
}

function buildJs(){
   return src(['assets/**/*.js', 'assets/*.js'])
       .pipe(babel({
           presets: ['@babel/env']
       }))
       .pipe(concat('app.js'))
       .pipe(uglify())
       .pipe(dest('build/'));
}

function watchSass(){
    watch(['assets/**/*.sass', 'assets/*.sass'], buildSass);
}

function watchJS(){
    watch(['assets/**/*.js', 'assets/*.js'], buildJs);
}

task('build:sass', buildSass);
task('build:js', buildJs);

task('watch:sass', watchSass);
task('watch:js', watchJS);

task('watch:js:sass', parallel(watchJS, watchSass));
task('build:app', parallel(buildSass, buildJs));