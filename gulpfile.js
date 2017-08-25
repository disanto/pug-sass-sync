'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var sync = require('browser-sync').create();
var reload = sync.reload;

gulp.task('default', ['sass', 'sass:watch', 'pug', 'pug:watch', 'browser-sync']);

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
		sync.reload();
});

gulp.task('sass:watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('pug', function() {
	return gulp.src('src/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./'));
});

gulp.task('pug:watch', function(){
	gulp.watch('./src/*.pug', ['pug']);	
});

gulp.task('browser-sync', function() {
	sync.init({
		server: {
			baseDir: "./"
		}	
	});	

	gulp.watch("*.html").on("change", reload);
	gulp.watch("./css/*.css").on("change", reload);
});