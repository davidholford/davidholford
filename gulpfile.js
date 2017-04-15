'use strict';

const gulp = require('gulp'),
    ghPages = require('gulp-gh-pages'),
    clean = require('gulp-clean'),
    gulpTaskListing = require('gulp-task-listing'),
    gitHubRemote = 'https://github.com/davidholford/davidholford.github.io',
    sourceFiles = [
        'davidHoldingJami.jpg',
        'holding.jpg',
        'index.html',
        'mooreBarn.JPG',
        'mooreBarn2.jpg',
        'ropeKnot.jpg',
        'savedStylesheetAdjustments.txt',
        'weddingtemplate.js',
        'weddingtemplatecss.css'
    ];

gulp.task('help', gulpTaskListing);

gulp.task('clean', function() {
    return gulp.src('dist/', {read: false})
        .pipe(clean());
});

gulp.task('deploy', function() {
    return gulp.src(sourceFiles, {base: '.'})
        .pipe(ghPages(_options(gitHubRemote)));
});

function _options(remoteUrl) {
    return {
        remoteUrl: remoteUrl,
        origin: 'origin',
        branch: 'master',
        cacheDir: 'dist/',
        push: true,
        force: true,
        message: 'Gulp Deployment'
    }
}