'use strict';

const {src, dest, task, watch, parallel} = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

function buildJs(){
    return src(['src/**/*.js', 'src/*.js'])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('build/'));
}

function watchJs(){
    watch(['src/**/*.js', 'src/*.js'], buildJs);
}

task('watch:js', watchJs);
task('build:js', buildJs);