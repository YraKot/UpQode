const gulp = require("gulp");
const stylus = require("gulp-stylus");
const pug = require("gulp-pug");
const autoprefixer = require('gulp-autoprefixer');
// const autoprefixer = require('autoprefixer');
const postcss = require("gulp-postcss");
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const Filter = require('gulp-filter');
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");

const STYL_PATH = 'src/**/*.styl';
const CSS_PATH = 'src/styles/**/*.css';
const PUG_PATH = 'src/**/*.pug';
const IMAGES_PATH = 'src/assets/images/*.{png,jpeg,jpg,svg,gif}';
const FONT_PATH = 'src/assets/fonts/**/*.ttf';
const JS_PATH = 'src/blocks/**/*.js';
const LIB_PATH = 'src/assets/lib/*.js';
const PHP_PATH = './src/php/*.php';

//php
gulp.task('php', function(){

	return gulp
	.src(PHP_PATH)
	.pipe( gulp.dest('./public/contactForm/'))
	.pipe(browserSync.reload({stream: true}));
})


//library
gulp.task('lib', function(){

	return gulp
		.src(LIB_PATH)
		.pipe(concat('lib.min.js'))
		.pipe( gulp.dest('./public/js'))
		.pipe(browserSync.reload({stream: true}));

});

// pug
gulp.task('pages', function(){
    
    return gulp
        .src('./src/pages/index.pug')
		.pipe( pug( {pretty: true } ) )
		// .pipe(rename(function (path) {
		// 	path.extname = ".php"
		// }))
		.pipe( gulp.dest('./public') )
		.pipe(browserSync.reload({stream: true}));
        
});

// stylus
gulp.task('styles', function(){
	var filter = Filter('**/*.styl', { restore: true });
	return gulp
	.src(['./src/styles/main.styl', './src/styles/**/*.css'])
		.pipe(plumber( function(err){
			console.log('Styles Task Error');
			console.log(err);
			this.emit('end');
		}))
		.pipe(autoprefixer({
			add: true,
			browsers: [
				'last 4 versions',
				'android 4',
				'opera 12',
				'ie 9'
			],  
			cascade: false
		}))
		.pipe(filter)
		.pipe( stylus() )
		.pipe(filter.restore)
		.pipe(concat('main.css'))
		.pipe( gulp.dest('./public/css'))
		.pipe(browserSync.reload({stream: true}));
     
});

// scripts
gulp.task('scripts', function () {
	return gulp
		.src(JS_PATH)
		.pipe(concat('scripts.js'))
		.pipe( gulp.dest('./public/js'))
		.pipe(browserSync.reload({stream: true}));
});

// image

// Image compression
// var imagemin = require('gulp-imagemin');
// var imageminPngquant = require('imagemin-pngquant');
// var imageminJpegRecompress = require('imagemin-jpeg-recompress');
// Images
gulp.task('images', function () {
    return gulp.src(IMAGES_PATH)
        // .pipe(imagemin(
        //     [
        //         imagemin.gifsicle(),
        //         imagemin.jpegtran(),
        //         imagemin.optipng(),
        //         imagemin.svgo(),
        //         imageminPngquant(),
        //         imageminJpegRecompress()
        //     ]
        // ))
        .pipe(gulp.dest('./public/images'));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "public"
		}
	})
});
// gulp.task('browser-sync', function() {
// 	browserSync.init({
//         proxy: "http://localhost:8888/pro_di_tech/public"
//     });
// });


// fonts
gulp.task('fonts', function(){
	return gulp.src(FONT_PATH)
		.pipe( gulp.dest('./public/fonts'))
});


// watch
// gulp.task('clean', function () {
// 	return del.sync([
// 		DIST_PATH
// 	])
// });

gulp.task('default', ['styles', 'pages', 'php', 'lib', 'scripts', 'images', 'fonts', 'browser-sync'], function () {
	console.log('Starting default task');
});

gulp.task('watch', ['default'], function () {
	console.log('Starting watch task');
	// require('./server.js');
	gulp.watch( PUG_PATH, ['pages']);
	gulp.watch( [STYL_PATH, CSS_PATH], ['styles']);
	gulp.watch( LIB_PATH, ['lib']);
	gulp.watch( JS_PATH, ['scripts']);
	gulp.watch( IMAGES_PATH, ['image']);
	gulp.watch( FONT_PATH, ['fonts']);
	gulp.watch( PHP_PATH, ['php']);
	browserSync.reload();
}); 
