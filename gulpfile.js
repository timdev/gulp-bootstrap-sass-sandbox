var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
    sassDir: './resources/sass'
};


gulp.task('css', function(){
    return gulp.src(config.sassDir + '/style.scss')
        .pipe(sass({
            includePaths: [config.bootstrapDir + '/assets/stylesheets'],
        }))
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest(config.publicDir + '/css'))
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
        .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('watch', function(){
    gulp.watch(config.sassDir + '/**/*.scss', ['css'])
});

gulp.task('default', ['css', 'fonts']);
