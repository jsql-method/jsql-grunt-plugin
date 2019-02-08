/*
 * Copyright (c) 2018 JSQL Sp.z.o.o. (Ltd, LLC) www.jsql.it
 * Licensed under the ISC license
 */

'use strict';

module.exports = function (grunt) {

    grunt.initConfig({

        jsql: {
            target: {
                options: {
                    apiKey: 'DEFAULT',
                    src: 'test/',
                    dist: 'test/dist'
                }
            }
        }

    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('test', ['jsql']);

};
