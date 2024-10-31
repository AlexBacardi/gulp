export const server = () => {
    app.plugins.browserSync.init({
        server: {
            baseDir: app.paths.dev.html,
            index: "ui.html",
        },
        watch: true,
        notify: false,
        port: 5500,
        online: true,
        browser: "chrome",
    })
}