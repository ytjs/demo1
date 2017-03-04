// 得到gulp对象
var gulp=require("gulp");
// 引入uglify
var uglify=require("gulp-uglify")
//新鲜任务
gulp.task("script",function(){
	//这里写要做的事情
	//匹配js文件
	gulp.src('src/js/app.js')
	//执行方法
	.pipe(uglify())
	//输出到指定目录
	.pipe(gulp.dest('./dist'))
})
