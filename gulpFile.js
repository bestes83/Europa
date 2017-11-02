var gulp = require("gulp");
var ts = require("gulp-typescript")

gulp.task('build', function(){
    return gulp.src('src/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            //outFile: 'output.js'
            outDir: "build"
        }))
        .pipe(gulp.dest('build'))
});

gulp.task("watch", ['scripts'], function(){
    gulp.watch("build", ["scripts"]);
});

gulp.task('default', ["build"])