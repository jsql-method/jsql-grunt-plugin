/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        jsql: {
            target: {
                options: {
                    apiKey: 'xxxx',
                    src: '',
                    dist: ''
                }
            }
        }

    });

    grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'jsql']);

};
