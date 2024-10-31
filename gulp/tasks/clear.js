export const clear = () => {
    return app.plugins.del(app.isBuild? app.paths.buildFolder : app.paths.devFolder)
}