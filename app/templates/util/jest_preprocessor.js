// preprocessor.js
var ReactTools = require('react-tools');
var babel = require('babel-core');
module.exports = {
  process: function(src, filename) {
    'use strict';
    src = ReactTools.transform(src);
    if (filename.indexOf('node_modules') === -1 && babel.canCompile(filename)) {
      return babel.transform(src, { filename: filename }).code;
    }
  }
};
