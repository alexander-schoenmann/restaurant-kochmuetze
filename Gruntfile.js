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
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.png'],
                        dest: 'public/images_min/',
                        ext: '.png'
                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'images/',
                        src: ['**/*.jpg','**/*.jpeg'],
                        dest: 'public/images_min/',
                        ext: '.jpg'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/html_min/index.html': 'index.html',
                    'public/html_min/menu.html': 'menu.html',
                    'public/html_min/menu-empty.html': 'menu-empty.html',
                    'public/html_min/newsletter.html': 'newsletter.html',
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['sass', 'imagemin', 'htmlmin']);

};