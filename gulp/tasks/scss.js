import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemap from 'gulp-sourcemaps'
import gulpUseForward from 'gulp-sass-glob-use-forward';
import gulpCssMediaQueries from 'gulp-group-css-media-queries';
import webpcss from 'gulp-webpcss';
import autoPrefixer from 'gulp-autoprefixer';
import gulpCleanCss from 'gulp-clean-css';

const Sass = gulpSass(sass);

export const scss = () => {
    return app.gulp.src(app.paths.src.css, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                'title': 'SCSS',
                'message': "Error: <%= error.message %>",
                'sound': false,
            })
        ))
        .pipe(sourcemap.init())
        .pipe(gulpUseForward())
        .pipe(Sass({
            outputStyle: 'expanded',
        }))
        .pipe(app.plugins.replace(
            /(['"]?)(\.\.\/)+(img|images|fonts|css|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi,
            '$1$2$3$4$6$1'
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            gulpCssMediaQueries()
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            webpcss(
                {
                    webpClass: '.webp',
                    noWebpClass: '.no-webp',
                }
            )
        ))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowserlist: ['last 3 versions'],
            cascade: true,
        }))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            gulpCleanCss()
        ))
        .pipe(app.plugins.rename({
            extname: '.min.css',
        }))
        .pipe(app.gulp.dest(app.isBuild ? app.paths.build.css : app.paths.dev.css))
        .pipe(app.plugins.browserSync.stream())
}