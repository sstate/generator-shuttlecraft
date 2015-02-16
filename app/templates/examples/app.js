'use strict';

global.React = require('react');

var HelloWorld = require('./../src/components/HelloWorld');
React.render(<HelloWorld />, document.getElementById('example'));
