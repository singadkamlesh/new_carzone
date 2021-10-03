var gulp = require('gulp');
sass = require("gulp-sass"),
postcss = require("gulp-postcss");
autoprefixer = require("autoprefixer");
var sourcemaps = require('gulp-sourcemaps'); 
var browserSync = require('browser-sync').create(); 
var cssbeautify = require('gulp-cssbeautify');
var beautify = require('gulp-beautify');


/*******************  LTR   ******************/


//_______ task for scss folder to css main style 
gulp.task('watch', function() {
	console.log('Command executed successfully compiling scss in assets.');
	 return gulp.src('Eudica/assets/scss/**/*.scss') 
		.pipe(sourcemaps.init())                       
		.pipe(sass())
		.pipe(sourcemaps.write(''))   
		.pipe(gulp.dest('Eudica/assets/css'))
		.pipe(browserSync.reload({
		  stream: true
	}))
})


//_______task for admin-custom
gulp.task('admin', function(){
   return gulp.src('Eudica/assets/css/admin-custom.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/css'));
		
})


//_______task for sidemenu
gulp.task('menu', function(){
   return gulp.src('Eudica/assets/css/sidemenu.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/css'));
		
})


//_______task for skin-modes
gulp.task('skins', function(){
   return gulp.src('Eudica/assets/css/skin-modes.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/css'));
		
})


/*******************  Color-skins   ******************/


//_______task for color1
gulp.task('color1', function(){
   return gulp.src('Eudica/assets/color-skins/color1.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color2
gulp.task('color2', function(){
   return gulp.src('Eudica/assets/color-skins/color2.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color3
gulp.task('color3', function(){
   return gulp.src('Eudica/assets/color-skins/color3.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color4
gulp.task('color4', function(){
   return gulp.src('Eudica/assets/color-skins/color4.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})


//_______task for color5
gulp.task('color5', function(){
   return gulp.src('Eudica/assets/color-skins/color5.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color6
gulp.task('color6', function(){
   return gulp.src('Eudica/assets/color-skins/color6.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color7
gulp.task('color7', function(){
   return gulp.src('Eudica/assets/color-skins/color7.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color8
gulp.task('color8', function(){
   return gulp.src('Eudica/assets/color-skins/color8.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color9
gulp.task('color9', function(){
   return gulp.src('Eudica/assets/color-skins/color9.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})

//_______task for color10
gulp.task('color10', function(){
   return gulp.src('Eudica/assets/color-skins/color10.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
		
})



/*******************  Beautify  ******************/

//_______ task for beautifying css
gulp.task('beautify', function() {
    return gulp.src('Eudica/assets/css/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('Eudica/assets/css'));
});


//_______ task for beautifying colorskins
gulp.task('beautifycolor', function() {
    return gulp.src('Eudica/assets/color-skins/*.css')
        .pipe(beautify.css({ indent_size: 4 }))
        .pipe(gulp.dest('Eudica/assets/color-skins'));
});