const gulp = require('gulp');
const scss = require('gulp-sass');
const watchSass = require("gulp-watch-sass");
const concat_css = require('gulp-concat-css');
const minify_css = require('gulp-minify-css');
const notify = require('gulp-notify');
const group_media = require("gulp-group-css-media-queries");
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const autoprefix = require('gulp-autoprefixer');
const run_sequence = require('run-sequence');
const shorthand = require('gulp-shorthand');

gulp.task('css-vendor', function () {
    return gulp.src([
        'node_modules/wowjs/css/libs/animate.css',
        'node_modules/owl.carousel/dist/assets/owl.carousel.css',
        'node_modules/jquery.scrollbar/jquery.scrollbar.css',
        'node_modules/bootstrap/dist/css/bootstrap.css',
    ])

        .pipe(concat_css('vendor.css'))

        .pipe(minify_css({keepSpecialComments: false}))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({
            message: 'css-vendor success'
        }));
});


gulp.task('scripts', function () {
    return gulp
        .src([
            "node_modules/jquery/dist/jquery.min.js",
            'node_modules/jquery.scrollbar/jquery.scrollbar.js',
            "node_modules/bootstrap/dist/js/bootstrap.js",
            'node_modules/owl.carousel/dist/owl.carousel.js',
            "node_modules/wowjs/dist/wow.js",
            'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
        ])
        .pipe(concat("script.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("assets/js"))
        .pipe(
            notify({
                message: "js success",
            })
        );
});
gulp.task('scss', function () {
    return gulp.src('assets/scss/style.scss')
        .pipe(scss({outputStyle: 'compressed'}).on('error', scss.logError))
        .pipe(group_media())
        .pipe(shorthand())
        .pipe(autoprefix({
            browsers: [
                '> 0.1%',
                'iOS >=7',
                'last 3 version',
                'firefox >= 4',
                'safari 7',
                'safari 8',
                'safari 5',
                'ie 8',
                'ie 9',
                'IE 10',
                'IE 11',
                'opera 12.1',
                'ios 6',
                'android 4'
            ],
            cascade: false
        }))
        .pipe(gulp.dest('assets/css'))
        .pipe(notify({
            message: 'scss success'
        }));
});


gulp.task('scss:watch', function () {
    gulp.watch('assets/scss/**/*.scss', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('scss', 'css-vendor', 'scripts'));

