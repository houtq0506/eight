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
                }
            }
        }))
})
gulp.task('minjs', function() {
    return gulp.src('./src/js/*.js', '!./src/js/lib/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('build'))
})
gulp.task('dev', gulp.series('minjs', 'server'))