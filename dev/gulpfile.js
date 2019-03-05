const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
gulp.task('scss', () => {
    return gulp
        .src('dev/scss/**/*.scss') // будет брать все файлы в подпапках
        .pipe(sass()) // sass компилирует исходник в css
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {
                cascade: true
            }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css')); // выгрузка скомпилированного css в директорию
});
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});
gulp.task('default', ['scss'], () => { // создание задачи для gulp
    gulp.watch('dev/scss/**/*.scss', ['scss']);
});