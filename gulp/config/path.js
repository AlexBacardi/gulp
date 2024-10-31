import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const srcPath = './src';
const distPath = './dist';
const devPath = './dev';

export const paths = {
    build: {
        html: distPath,
        css: `${distPath}/css/`,
        js: `${distPath}/js/`,
        img: `${distPath}/img/`,
        fonts: `${distPath}/fonts/`,
        files: `${distPath}/files/`,
        libs: `${distPath}/libs/`,
        video: `${distPath}/video/`,
    },
    dev: {
        html: devPath,
        css: `${devPath}/css/`,
        js: `${devPath}/js/`,
        img: `${devPath}/img/`,
        fonts: `${devPath}/fonts/`,
        files: `${devPath}/files/`,
        libs: `${devPath}/libs/`,
        video: `${devPath}/video/`,
    },
    src: {
        html: `${srcPath}/pug/pages/**/*.pug`,
        css: `${srcPath}/scss/*.scss`,
        js: `${srcPath}/js/*.js`,
        img: `${srcPath}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcPath}/img/**/*.svg`,
        fonts: `${srcPath}/fonts/**/*.{eot,woff,woff2,ttf,svg}`,
        files: `${srcPath}/files/**/*.*`,
        libs: `${srcPath}/libs/**/*.*`,
        video: `${srcPath}/video/**/*.*`,
    },
    watch: {
        html: `${srcPath}/pug/**/*.pug`,
        css: `${srcPath}/scss/**/*.scss`,
        js: `${srcPath}/js/**/*.js`,
        img: `${srcPath}/img/**/*.{jpg,jpeg,png,svg,gif,webp,ico}`,
        fonts: `${srcPath}/fonts/**/*.{eot,woff,woff2,ttf,svg}`,
        files: `${srcPath}/files/**/*.*`,
        libs: `${srcPath}/libs/**/*.*`,
        video: `${srcPath}/video/**/*.*`,
    },
    scrFolder: srcPath,
    buildFolder: distPath,
    devFolder: devPath,
    rootFolder: rootFolder,
}