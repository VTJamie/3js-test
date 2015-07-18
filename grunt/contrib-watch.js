module.exports = function(grunt) {

	grunt.config('watch', {
		gruntfile: {
			files: ['Gruntfile.js']
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= yeoman.app %>/**/*.html',
                '<%= yeoman.app %>/**/*.js',
				'<%= yeoman.app %>/styles/**/*.css',
				'<%= yeoman.app %>/styles/images/*.{png,jpg,jpeg,gif,webp,svg}'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');

};
