module.exports = function(grunt) {

    grunt.initConfig({
        watch: {
            files: 'scss/*.scss',
            tasks: ['sass']
        },
        sass: {
            dist: {
                files: {
                    'public/css/main.css': 'scss/main.scss',
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['sass']);

};