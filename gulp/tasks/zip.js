import gulpZip from "gulp-zip";

export const zip = () => {
    app.plugins.del(`./${app.paths.rootFolder}.zip`)
    return app.gulp.src(`${app.paths.buildFolder}/**/*.*`, { encoding: false })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                'title': 'ZIP',
                'message': "Error: <%= error.message %>",
                'sound': false,
            })
        ))
        .pipe(gulpZip(`${app.paths.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
}