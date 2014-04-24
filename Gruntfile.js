module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        img_src_path: 'img/',
        img_build_path: "build/img/",
        js_src_path: 'js',
        js_build_path: "build/js/",
        sass_src_path: "sass/",
        css_src_path: "css/",
        css_build_path: "build/css/",
        uglify: {
            jsmin: {
                files: [{
                    expand: true,
                    cwd: '<%= js_src_path %>',
                    src: '**/*.js',
                    dest: '<%= js_build_path %>'
                }]
            }
        },
        imagemin: { // Task
            png: {
                options: {
                    optimizationLevel: 2,
                    cache: false
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '<%= img_src_path %>',
                        src: ['*.png'],
                        // Could also match cwd line above. i.e. project-directory/img/
                        dest: '<%= img_build_path %>',
                        ext: '.png',

                    }
                ]
            },
            jpg: {
                options: {
                    progressive: true,
                    cache: false
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '<%= img_src_path %>',
                        src: ['*.jpg'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: '<%= img_build_path %>',
                        ext: '.jpg'
                        }
                ]
            },
            gif: {
                options: {
                    progressive: true,
                    cache: false
                },
                files: [
                    {
                        // Set to true to enable the following options…
                        expand: true,
                        // cwd is 'current working directory'
                        cwd: '<%= img_src_path %>',
                        src: ['*.gif'],
                        // Could also match cwd. i.e. project-directory/img/
                        dest: '<%= img_build_path %>',
                        ext: '.gif'
                        }
                ]
            }
        },
        image_resize: {

            options: {
                width: 260,
                height: 260,
                overwrite: true

            },
            test: {
                files: [{
                    expand: true,
                    src: ['<%= img_build_path %>f.jpg'],
                    dest: '<%= img_build_path %>'
            }]

            }



        },
        cssmin: {
            minify: {
                expand: true,
                cwd: '<%= css_src_path %>',
                src: ['*.css', '!*.min.css'],
                dest: '<%= css_build_path %>',
                ext: '.css'
            }
        },
        compass: { // Task
            dev: { //target
                options: {
                    sassDir: '<%= sass_src_path %>',
                    cssDir: '<%= css_src_path %>',
                    watch: true
                }
            }
        },
        watch: {
            image: {
                files: '<%= img_src_path %>',
                tasks: ['imagemin']
            }
        },
        concurrent: {
            target1: ['cssmin', 'compass', 'watch'],
            target2: ['imagemin', 'cssmin', 'image_resize']
        }
    });

    // Load the plugin that provides the tasks.
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-concurrent');
    // Default task(s).
    grunt.registerTask('default', ['compass']);
    grunt.registerTask('deploy', ['imagemin', 'cssmin', 'uglify']);

};