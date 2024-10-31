import webpack from "webpack-stream";

export const script = () => {
    return app.gulp.src(app.paths.src.js, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                'title': 'JS',
                'message': "Error: <%= error.message %>",
                'sound': false,
            })
        ))
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'main.min.js',
            }
        }))
        .pipe(app.gulp.dest(app.isBuild ? app.paths.build.js : app.paths.dev.js))
}