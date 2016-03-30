/*=============================================>>>>>
= MODULES =
===============================================>>>>>*/

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// postcss processors
const autoprefixer = require('autoprefixer');

/*= End of MODULES =*/
/*=============================================<<<<<*/

/*----------- SETTINGS -----------*/
const sassManifestFiles = './src/sass/*.scss';
const sassFiles = './src/sass/**/*.scss';

/*=============================================>>>>>
= TASK ERROR HANDLER =
===============================================>>>>>*/

const interceptErrors = error => {
  const args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

/*= End of TASK ERROR HANDLER =*/
/*=============================================<<<<<*/

gulp.task('sass', function() {
    return gulp.src(sassManifestFiles)
    .pipe(plugins.sass())
    .on('error', interceptErrors)
    .pipe(plugins.postcss([ autoprefixer ]))
    .pipe(gulp.dest("./src/css/"));
});

gulp.task('default', [ 'sass' ], function() {
    gulp.watch(sassFiles, [ 'sass' ]);
});
