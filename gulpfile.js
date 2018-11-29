var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');// 兼容浏览器，添加前缀
var cssmin = require('gulp-cssmin');

gulp.task('compile', function() {
  return gulp.src('./packages/theme/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/theme'));
});

gulp.task('copyfont', function() {
  return gulp.src('./packages/theme/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('./lib/theme/fonts'));
});

gulp.task('build', ['compile', 'copyfont']);