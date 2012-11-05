/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {

  // Load all the tasks.
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Project configuration.
  grunt.initConfig({

    lint: {
      all: [
        'grunt.js',
        'app/**/*.js',
        'test/spec/**/*.js'
      ]
    },

    watch: {
      scripts: {
        files: '<config:lint.all>',
        tasks: 'lint test'
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        // undef: true,
        boss: true,
        eqnull: true,
        // node: true,
        // es5: true,
        strict: false
      }
    },

    mocha: {
      index: [ 'test/runner.html' ]
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: "app/main.js",
          //dir: "dist/app",
          name: 'app',
          out: 'dist/app/amd-app.js'
        }
      }
    }
    // ,
    // clean: ['dist/*'],
    // copy: {
    //   dist: {
    //     files: {
    //       "app/**": "dist/app/**"
    //     }
    //   }
    // }
  });


  // Register Actions.
  grunt.registerTask('default', 'lint test');

  grunt.registerTask('test', 'mocha');

  grunt.registerTask('build', 'requirejs');

};
