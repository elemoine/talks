var path = require('path');


/** @param {Object} grunt Grunt. */
module.exports = function(grunt) {

  var build = path.join('.grunt', 'self');

  grunt.initConfig({
    clean: {
      all: build
    }
  });

  // contrib tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // 3rd party tasks
  grunt.loadNpmTasks('grunt-gh-pages');

  // local tasks

};

