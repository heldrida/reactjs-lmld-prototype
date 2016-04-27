var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');

gulp.task('sass', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('default', ['sass']);
