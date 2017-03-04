module.exports = function(grunt) {
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            default: {
                files: {
                    "dist/perfect-bootstrap.css": "less/grid.less"
                }
            }
        },
        cssmin: {
            minify: {
                expand: true,
                cwd: 'dist/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/',
                ext: '.min.css'
            }
        },
        watch: {
            css: {
                files: ['less/*.less'],
                tasks: ['less', 'cssmin']
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['less', 'cssmin']);
    grunt.registerTask('release', ['less', 'cssmin']);

};