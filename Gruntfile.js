/**
 * Controller for our Grunt integration
 *
 * It will setup configuration and load all tasks from the tasks folders.
 * Alias are also defined below.
 */
module.exports = function(grunt) {

    'use strict';

    var pkg = require('./package.json');

    // Shared configuration
    grunt.initConfig({
        config: pkg.config,
        env: process.env
    });

    grunt.loadNpmTasks("grunt-extend-config");

    grunt.loadTasks('extension');

    // Aliases
    // grunt.registerTask(
    //     'compile',
    //     'Compile the application deployable',
    //     ['clean:build', 'copy:bootstrapVars', 'compass:dist', 'keymap', 'messageformat', 'handlebars', 'requirejs']
    // );

    // grunt.registerTask(
    //     'test',
    //     'Jasmine test the application javascript', ['clean:jasmine', 'connect:test', 'jasmine:test']
    // );

    // grunt.registerTask(
    //     'coverage',
    //     'Jasmine test and record coverage using Istanbul for the application javascript', ['clean:jasmine', 'connect:coverage', 'jasmine:coverage']
    // );

};
