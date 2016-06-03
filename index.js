var request = require('request');
var async = require('async');
var gutil = require('gulp-util');

function check(url, callback) {
  request(url, function (error, response) {
    if (!response) { return callback(new gutil.PluginError('gulp-upyet', url + ' not returning a 200')); }
    if (response.statusCode === 200) { return callback(null); }
    return response;
  });
}

module.exports = function (url, retries, callback) {
  return async.retry({ times: retries, interval: 1000 }, check.bind(null, url), callback);
}
