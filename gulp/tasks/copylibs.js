export const copyLibs = () => {
    return app.gulp.src(app.paths.src.libs)
        .pipe(app.gulp.dest(app.isBuild ? app.paths.build.libs :app.paths.dev.libs))
}