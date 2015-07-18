module.exports = function(grunt) {

	grunt.config('targethtml', {
		dev: {
			files: [{
				expand: true,
				cwd: '<%= yeoman.app %>',
				src:['../**/phoneindex.html'],
				dest: '<%= yeoman.androidphone %>/app/Content',
			},
			{
                expand: true,
                cwd: '<%= yeoman.app %>',
                src:['../**/phoneindex.html'],
                dest: '<%= yeoman.iosphone %>/app/Content',
            }]
		},
		dist: {
            files: [{
                expand: true,
                cwd: '<%= yeoman.app %>',
                src:['../**/phoneindex.html'],
                dest: '<%= yeoman.androidphone %>/app/Content',
            },
            {
                expand: true,
                cwd: '<%= yeoman.app %>',
                src:['../**/phoneindex.html'],
                dest: '<%= yeoman.iosphone %>/app/Content',
            }]
        }
	});

	grunt.loadNpmTasks('grunt-targethtml');

};