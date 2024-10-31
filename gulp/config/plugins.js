import plumber from "gulp-plumber";
import notify from 'gulp-notify';
import gulpIf from 'gulp-if';
import replace from 'gulp-replace';
import rename from 'gulp-rename';
import { deleteAsync } from 'del'
import browserSync from "browser-sync";
import newer from "gulp-newer";

export const plugins = {
    plumber,
    notify,
    replace,
    gulpIf,
    rename,
    del: deleteAsync,
    browserSync,
    newer,
}