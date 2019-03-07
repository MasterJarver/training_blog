const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
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
        .pipe(gulp.dest('dist/css')) // выгрузка скомпилированного css в директорию
        .pipe(browserSync.reload({stream: true}));
});
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        notify: false
    });
});
gulp.task('default', ['browser-sync', 'scss'], () => { // создание задачи для gulp
    gulp.watch('dev/scss/**/*.scss', ['scss']);
    gulp.watch('dist/*.html', browserSync.reload);
});