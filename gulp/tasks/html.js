import pug from "gulp-pug";
import webpHtml from 'gulp-webp-html-nosvg';
import versionNember from 'gulp-version-number';
import formatHtml from 'gulp-format-html';

export const html = () => {
    return app.gulp.src(app.isBuild ? [app.paths.src.html, `!src/pug/pages/ui.pug`, `!src/pug/pages/ui/**`] : app.paths.src.html)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                'title': 'HTML',
                'message': "Error: <%= error.message %>",
                'sound': false,
            })
        ))
        .pipe(pug({
            pretty: '\t'
        }))

        .pipe(app.plugins.replace(
            /(?<=src=|href=|srcset=)(['"])(\.(\.)?\/)*(img|images|fonts|scss|sass|js|files|audio|video)(\/[^\/'"]+(\/))?([^'"]*)\1/gi, '$1./$4$5$7$1'
            )
        )
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            webpHtml()
        ))
        .pipe(app.plugins.gulpIf(
            app.isBuild,
            versionNember({
                'value': '%DT%',
                'append': {
                    'key': '_v',
                    'cover': 0,
                    'to': [
                        'css',
                        'js',
                    ]
                },
                'output': {
                    'file': 'gulp/version.json'
                }
            })
        ))
        .pipe(formatHtml())
        .pipe(app.gulp.dest(app.isBuild ? app.paths.build.html : app.paths.dev.html))
}