'use strict';

module.exports = function () {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src($.config.app + '/images/sprite/**/*.png')
      .pipe($.sprite({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        cssFotmat: 'scss',
        padding: 10
      }));
    
    spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img/'));
    spriteData.css.pipe($.gulp.dest($.config.app + '/style/common/'));

    return spriteData;
  })
}
