import gulp from "gulp";
import { paths } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { clear } from "./gulp/tasks/clear.js";
import { scss } from "./gulp/tasks/scss.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { copyLibs } from "./gulp/tasks/copylibs.js";
import { copyVideo } from "./gulp/tasks/copyVideo.js";
import { image } from "./gulp/tasks/img.js";
import { script } from "./gulp/tasks/script.js";
import { zip } from "./gulp/tasks/zip.js";


global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    gulp,
    paths,
    plugins,
}

function watcher() {
    gulp.watch(paths.watch.html, html);
    gulp.watch(paths.watch.css, scss);
    gulp.watch(paths.watch.libs, copyLibs);
    gulp.watch(paths.watch.video, copyVideo);
    gulp.watch(paths.watch.img, image);
    gulp.watch(paths.watch.js, script);
}

const mainTasks = gulp.parallel(html, scss, copyLibs, copyVideo, image, script);
const dev = gulp.series(clear, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(clear, mainTasks);
const deployZip = gulp.series(clear, mainTasks, zip);

export { dev }
export { build }
export { deployZip }