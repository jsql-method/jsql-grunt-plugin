/*
 * Copyright (c) 2018 JSQL Sp.z.o.o. (Ltd, LLC) www.jsql.it
 * Licensed under the ISC license
 */

'use strict';

module.exports = function (grunt) {
	grunt.loadNpmTasks('grunt-exec');

    grunt.registerMultiTask('jsql', 'Grunt plugin to run JSQL CLI', function () {

        let options = this.options({});
		grunt.config('exec.jsql', 'node ' + require.resolve('jsql-cli') + ' --apikey=' + options.apiKey + ' --input=' + options.src + ' --output=' + options.dist);
		grunt.task.run(['exec:jsql']);

    });

};
