/*
 * Copyright (c) 2017-2019 JSQL Sp. z.o.o. (Ltd, LLC) www.jsql.it
 * See LICENSE or https://jsql.it/public-packages-license
 */

'use strict';

module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerMultiTask('jsql', 'Grunt plugin to for JSQL CLI', function () {

        let options = this.options({});
        let command = 'node ' + require.resolve('jsql-cli') +
            ' --apiKey=' + options.apiKey +
            ' --input=' + options.src +
            ' --output=' + options.dist +
            ' --env=' + (options.local ? 'local' : 'prod') +
            (options.devKeyFileName ? ' --devKeyFileName=' + options.devKeyFileName : '') +
            (options.debug ? ' --debug ' : '');

        grunt.config('exec.jsql', command);
        grunt.task.run(['exec:jsql']);

    });

};
