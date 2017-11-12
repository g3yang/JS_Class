var path = require('path');

exports.config = {
  specs: [
    './example.spec.js'
  ],

  capabilities: {

    'browserName': 'chrome',
    'shardTestFiles': true
    // 'maxInstances': 3
  },

  // url where your app is running, relative URLs are prepending with this URL
  baseUrl: 'http://localhost:9000/#!/',
  // chromeOnly:true,
  // directConnect: true,

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  // testing framework, jasmine is the default
  framework: 'jasmine2'


};