import * as gulp from 'gulp';
import * as fs from 'fs';
import * as pngToIco from 'png-to-ico';

gulp.task('default', () => {
  console.log('Gulp is running!');
});

gulp.task('make_icon_windows', () => {
  pngToIco('./src/assets/images/IconApp.png')
    .then(buf => {
      fs.writeFileSync('./src/assets/images/IconApp.ico', buf);
    })
    .catch(console.error);
});
