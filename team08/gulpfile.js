<<<<<<< HEAD
var gulp = require('gulp')
var server = require('gulp-webserver')
var fs = require('fs')
var path = require('path')
var url = require('url')
var datajson = require('./src/data/data.json')
var minjs = require('gulp-uglify')
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9990,
            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname
                if (pathname === '/favicon.ico') {
                    res.end()
                    return
                }
                if (pathname === '/api/swiper') {
                    res.end(JSON.stringify({ code: 1, msg: datajson }))
                } else {
                    pathname = pathname === '/' ? '/index.html' : pathname
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
=======
var gulp = require('gulp');
var minCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');
var concat = require('gulp-concat');
var fs = require('fs');
var path = require('path');
var url = require('url');
var sass = require('gulp-sass')
gulp.task('css', function() {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 8090,
            open: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/favicon.ico') {
                    return false
                }
                if (pathname === '/api/src') {
                    res.end('成功')
                } else {
                    pathname = pathname === '/' ? 'index.html' : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
>>>>>>> 04e5e74c3bd86506a0cd279227f663f639aba1a8
                }
            }
        }))
})
<<<<<<< HEAD
gulp.task('minjs', function() {
    return gulp.src('./src/js/*.js', '!./src/js/lib/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('build'))
})
gulp.task('dev', gulp.series('minjs', 'server'))
=======
gulp.task('dev', gulp.series(['css', 'server']))
>>>>>>> 04e5e74c3bd86506a0cd279227f663f639aba1a8
