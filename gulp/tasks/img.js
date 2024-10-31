import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const image = () => {
    return app.gulp.src(app.paths.src.img, { encoding: false })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                'title': 'IMAGES',
                'message': "Error: <%= error.message %>",
                'sound': false,
            })
        ))
        .pipe(app.plugins.newer(app.isBuild ? app.paths.build.img : app.paths.dev.img))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            webp()
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            app.gulp.dest(app.paths.build.img)
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            app.gulp.src(app.paths.src.img, { encoding: false })
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            app.plugins.newer(app.paths.build.img)
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 //0 to 7
            })
        ))
        .pipe(app.gulp.src(app.paths.src.svg, { encoding: false }))
        .pipe(app.gulp.dest(app.isBuild ? app.paths.build.img : app.paths.dev.img))
}