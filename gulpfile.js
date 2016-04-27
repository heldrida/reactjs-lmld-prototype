var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	exec = require('child_process').exec,
	webpack = require("webpack"),
	webpackDevServer = require("webpack-dev-server"),
	webpackConfig = require("./webpack.config.js"),
	gutil = require('gulp-util'),
	inject = require('gulp-inject');

gulp.task('sass', function () {
    return gulp.src('./src/sass/app.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./build/css'));
});

gulp.task("webpack:build", function(callback) {
	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.plugins = myConfig.plugins.concat(
		new webpack.DefinePlugin({
			"process.env": {
				// This has effect on the react lib size
				"NODE_ENV": JSON.stringify("production")
			}
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

	// run webpack
	webpack(myConfig, function(err, stats) {
		if(err) throw new gutil.PluginError("webpack:build", err);
		gutil.log("[webpack:build]", stats.toString({
			colors: true
		}));
		callback();
	});
});

gulp.task("webpack:server", function(callback) {

	// modify some webpack config options
	var myConfig = Object.create(webpackConfig);
	myConfig.devtool = "eval";
	myConfig.debug = true;

	// Start a webpack-dev-server
	var server = new webpackDevServer(webpack(myConfig), {
		//noInfo: true,
		//watch: true,
		contentBase: './build',
		hot: true,
		progress: true,
		open: true,
		stats: {
			colors: true
		}
	});

	server.listen(8888, "localhost", function(err) {
		if(err) throw new gutil.PluginError("webpack-dev-server", err);
		gutil.log("[webpack-dev-server]", "http://localhost:8888");
	});

});

gulp.task("inject", function () {

	return gulp.src('./build/index.html')
			.pipe(inject(gulp.src('./build/css/**/*.css', {read: false}), {relative: true}))
			.pipe(gulp.dest('./build'));

});

gulp.task('watch', function () {
	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./build/index.html', ['inject']);
});

gulp.task('default', ['webpack:server', 'watch']);