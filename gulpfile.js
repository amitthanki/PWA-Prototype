
// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var rename = require('gulp-rename');
var del = require('del');
var runSequence = require('run-sequence').use(gulp);
var iconfont = require('gulp-iconfont');
var consolidate = require("gulp-consolidate");
var runTimestamp = Math.round(Date.now()/1000);


// Constants
var devPath = "./src";




//generate icon font
var fontName = 'iconFont';

gulp.task('icons', function(){

  //delete any old versioned css files
  del(devPath + '/assets/fonts/*');
  return gulp.src(devPath + '/app/styles/icons/**/*.svg')
    .pipe(iconfont({
      fontName: fontName,
      normalize:true,
      fontHeight: 1001,
      formats: ['woff2', 'woff'], 
      timestamp: runTimestamp,
      appendCodepoints: true,
     }))
    .on('glyphs', function(glyphs, options) {

      gulp.src(devPath + '/app/styles/scss/core/icons-template.scss') // a template scss file, used to generate the scss code for all the icons
        .pipe(consolidate('lodash', {
          // see the font-template.scss file to see how the following 'fontName' and 'fontPath' values are used
          glyphs: glyphs,
          fontName: fontName,
          fontPath: 'assets/fonts/',
          className: 'icon',
          timestamp: runTimestamp
        }))
        .pipe(rename('_icons.scss'))
        .pipe(gulp.dest(devPath + '/app/styles/scss/core/')); 
      })
    .pipe(gulp.dest(devPath + '/assets/fonts/'));
});






// running default gulp task with run watcher on styles, app.js and icons folder
// gulp styles will compile stylesheet
// gulp icons will compile icons folder and generate icon font

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(devPath + '/icons/*.svg', function(){ runSequence('icons') });
});


// Default Task
gulp.task('default', ['watch']);
