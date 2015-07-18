module.exports = function(grunt) {

	grunt.config('uglify', {
        dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>',
                src: ['**/*.js', '!**/main.js'],
                dest: '<%= yeoman.dist %>'
            }]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
