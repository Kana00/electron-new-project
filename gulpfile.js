const gulp = require('gulp');
const shell = require('gulp-shell');

gulp.task('electron-icon', shell.task('node ./node_modules/.bin/electron-icon-maker --input=./src/assets/images/icons/IconOfTheAppToBuild.png --output=./src/assets/images'));
