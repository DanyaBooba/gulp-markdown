import gulp from "gulp";
import markdown from "gulp-markdown";

export default () =>
	gulp.src("src/intro.md").pipe(markdown()).pipe(gulp.dest("dist"));
