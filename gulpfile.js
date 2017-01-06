const css        = require('gulp-clean-css')
const gulp       = require('gulp');
const sass       = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const ghpages    = require('gh-pages');
const path       = require('path');

gulp.task('default', [ 'build', 'watch' ]);
gulp.task('build', [ 'sass', 'assets' ]);
gulp.task('watch', function() {
  gulp.watch('./src/**/*.scss', [ 'sass'   ]);
  gulp.watch('./src/**/*.html', [ 'assets' ]);
});

gulp.task('assets', function() {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  return gulp.src('./src/style/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(css({
      compatibility: 'ie8'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public'));
});

gulp.task('deploy', function() {
  return ghpages.publish(path.join(__dirname, 'public'), {
    branch: 'master'
  });
});