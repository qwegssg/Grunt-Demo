// Grunt: the JavaScript Task Runner
module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            js: {
                src: ['js/1.js', 'js/2.js'],
                dest: 'build/js/scripts.js'
            },
            css: {
                src: ['css/main.css', 'css/theme.css'],
                dest: 'build/css/style.css'
            }
        },

        watch: {
            js: {
                files: 'js/*.js',
                tasks: ['concat:js']
            },
            css: {
                files: 'css/*.css',
                tasks: ['concat:css']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'watch']);

}