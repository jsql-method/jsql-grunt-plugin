/*
 * jsql
 *
 * Copyright (c) 2018 JSQL
 * Licensed under the ISC license.
 */

'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-exec');

    grunt.registerMultiTask('jsql', 'Grunt plugin to run java jar.', function () {

        var jsql = require("npm-jsql");
        var options = this.options({});
		grunt.config('exec.jsql', 'node ' + require.resolve('npm-jsql') + ' ' + options.apiKey + ' ' + options.src + ' ' + options.dist);
		grunt.task.run(['exec:jsql']);

    });

};
