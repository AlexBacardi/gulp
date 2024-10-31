export const copyVideo = () => {
    return app.gulp.src(app.paths.src.video)
        .pipe(app.gulp.dest(app.isBuild ? app.paths.build.video : app.paths.dev.video))
}