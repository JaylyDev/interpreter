const gulp = require("gulp");
const ts = require('gulp-typescript');
const debug = require("gulp-debug");
const child_process = require("child_process");

/**
 * Compile src/scripts directory
 * @param {(error?: Error | null) => void} done
 */
function scriptsJs (done) {
  const tsProject = ts.createProject("./src/scripts/tsconfig.json");

  gulp.src("src/scripts/**/**.js")
      .pipe(debug({ showFiles: true }))
      .pipe(tsProject())
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
  done();
};

/**
 * Compile src/scripts directory
 * @param {(error?: Error | null) => void} done
 */
function scripts (done) {
  const tsProject = ts.createProject("./src/scripts/tsconfig.json");

  gulp.src("src/scripts/**/**.ts")
      .pipe(debug({ showFiles: true }))
      .pipe(tsProject())
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
  done();
};

/**
 * Compile src/build directory
 * @param {(error?: Error | null) => void} done
 */
function build (done) {
  const tsProject = ts.createProject("./src/build/tsconfig.json");

  gulp.src("src/build/**/*.ts")
      .pipe(debug({ showFiles: true }))
      .pipe(tsProject())
      .pipe(gulp.dest((file) => {
        return file.base;
      }));
  done();
};

/**
 * Compile src/scripts directory with webpack
 * @param {(error?: Error | null) => void} done
 */
function webpackBuild (done) {
  child_process.exec('npx webpack --config ./webpack.config.js', (error, stdout, stderr) => {
    console.log(stdout);

    // Build behavior pack, gulp done function executes when the function is done
    executeBuildScripts(done);
  });
};

/**
 * Execute compiled build scripts to generate a
 * behavior pack.
 * @param {(error?: Error | null) => void} done
 */
function executeBuildScripts (done) {
  require('./dist/index');
  done();
};

// Create gulp tasks
gulp.task("build", build);
gulp.task("scripts-js", scriptsJs); // Deprecated, replaced with webpack
gulp.task("scripts", scripts); // Deprecated, replaced with webpack
gulp.task('webpack-scripts', webpackBuild);

gulp.task('default', gulp.parallel([
  'build',
  // 'webpack-scripts',
]));