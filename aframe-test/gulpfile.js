var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('aframeTest/scss/app.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('aframeTest/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: 'aframeTest'
		},
		online: true
	});
});

// function that calls the sass and browserSync functions when you save a change to a .scss, .js, or .html file
gulp.task('watch', ['browserSync', 'sass'], function() {
	gulp.watch('aframeTest/scss/**/*.scss', ['sass']);
	gulp.watch('aframeTest/*.html', browserSync.reload);
	gulp.watch('aframeTest/js/**/*.js', browserSync.reload);
});