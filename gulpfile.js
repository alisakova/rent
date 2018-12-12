'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-clean-css'),
    wait = require('gulp-wait'),
    imagemin = require('gulp-imagemin'),
    webserver = require('gulp-webserver'),
    htmlImport = require('gulp-html-import');

var path = {
    build: { // куда складывать
        html: 'build/',
        js: 'build/js/',
        images: 'build/images/',
        css: 'build/css/',
        fonts: 'build/fonts/'
    },
    src: { // откуда брать
        html: 'assets/*.html',
        js: 'assets/js/*.js',
        //jsLibs: 'assets/libs/js/*.js',
        images: 'assets/images/**/*.*',
        style: 'assets/scss/imports.scss',
        //styleLibs: 'assets/libs/css/*.css',
        fonts: 'assets/fonts/*.*'
    },
    watch: { // за чем наблюдать
        html: 'assets/**/**/*.html',
        images: 'assets/images/**/*.*',
        js: 'assets/js/*.js',
        //jsLibs: 'assets/libs/js/*.js',
        style: 'assets/scss/*.scss',
        //styleLibs: 'assets/libs/css/*.css'
    },
    clean: './build'
};




function log(error) {
    console.log([
        '',
        "----------ERROR MESSAGE START----------",
        ("[" + error.name + " in " + error.plugin + "]"),
        error.message,
        "----------ERROR MESSAGE END----------",
        ''
    ].join('\n'));
    this.end();
}

gulp.task('webserver', function() {
  gulp.src('./build')
    .pipe(webserver({
      livereload: true,
      host: 'localhost',
      port: 9000,
      //directoryListing: true,
      //open: true
    }));
});

gulp.task('html:build', function () {
    return gulp.src(path.src.html)
    .on('error', log)
    .pipe(htmlImport('./assets/components/'))
    .pipe(gulp.dest(path.build.html))
});



/* собрать скрипты */
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        //.pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(path.build.js))
});
// библиотеки
// gulp.task('jsLibs:build', function () {
//     gulp.src(path.src.jsLibs)
//         .pipe(concat('libs.js'))
//         .pipe(gulp.dest(path.build.js))
// });

/* собрать scss в css */
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(wait(200))
        .pipe(sass().on('error', sass.logError))
        .pipe(prefixer())
        //.pipe(gcmq())
        .pipe(cssmin({level: 2, format: 'beautify'}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.build.css))
});

// библиотеки

// gulp.task('styleLibs:build', function () {
//     gulp.src(path.src.styleLibs)
//         .pipe(wait(200))
//         //.pipe(cssmin())
//         .pipe(concat('libs.css'))
//         .pipe(gulp.dest(path.build.css))
// });


/* сжать картинки */
gulp.task('images:build', function () {
    gulp.src(path.src.images)
        .pipe(wait(1000))
        // .pipe(imagemin())
        .pipe(gulp.dest(path.build.images))
});

/* шрифты */
gulp.task('fonts:build', function () {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

/* собрать всё */
gulp.task('build', [
    'html:build',
    'js:build',
    //'jsLibs:build',
    'style:build',
    //'styleLibs:build',
    'images:build',
    'fonts:build',
    'webserver'
]);


/* следить за изменениями */
gulp.task('watch', function(){
    watch([path.watch.html], function(event, cb) {
        gulp.start('html:build');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:build');
    });
    // watch([path.watch.styleLibs], function(event, cb) {
    //     gulp.start('styleLibs:build');
    // });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:build');
    });
    // watch(path.watch.jsLibs, function(event, cb) {
    //     gulp.start('jsLibs:build');
    // });
    watch([path.watch.images], function(event, cb) {
        gulp.start('images:build');
    });
});

gulp.task('default', ['build', 'watch']);
