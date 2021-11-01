const gulp = require('gulp')
const gulpMinifyCss = require('gulp-minify-css')
const rename = require('gulp-rename')

gulp.task('sayHello', async function () {
  console.log('Hello, selamat datang di Gulp!')
})

gulp.task('minify-css', async function () {
  gulp.src(['src/styles/*.css', '!src/styles/*.min.css'])
    .pipe(gulpMinifyCss({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./src/styles/'))
})

gulp.task('build', gulp.series('minify-css'))
