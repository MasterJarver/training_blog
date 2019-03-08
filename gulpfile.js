const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const plumber = require('gulp-plumber');
gulp.task('scss', () => {
    return gulp
        .src('dev/scss/**/*.scss') // будет брать все файлы в подпапках
        .pipe(sass()) // sass компилирует исходник в css
        .pipe(
            autoprefixer(['last 15 versions', '> 1%', 'ie 8'], {
                cascade: true
            }))
        .pipe(cssnano())
        .pipe(gulp.dest('public/stylesheets')) // выгрузка скомпилированного css в директорию
});
gulp.task('default', ['scss'], () => { // создание задачи для gulp
    gulp.watch('dev/scss/**/*.scss', ['scss']);
});