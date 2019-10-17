var through = require('through2');
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');
var PluginError = gutil.PluginError;

var PLUGIN_NAME = 'gulp-inject-scripts';

// EXPORTING THE PLUGIN MAIN FUNCTION
module.exports = function(opts) {

  if (!opts) opts = {};

  if (!opts.baseDir) opts.baseDir = __dirname;

  var self = null;

  var MATCH_PATTERN = /<script[\s\S]*?>[\s\S]*?<\/script>/gi;

  function throwError(msg) {
    self.emit('error', new PluginError(PLUGIN_NAME, msg));
  }

  function getSource(data) {

    var result = null;
    var group = data.match(/src\s*=\s*"(.+?)"/gi);

    if (group && group.length > 0) {
      result = group[0].split("=")[1].replace(/\s*['"](.*)['"]\s*/, '$1');
    };

    return result;

  }

  function wrapTag(text) {
    return '<script>' + text + '<\/script>';
  }

  function getScript(src) {

    src = path.join(opts.baseDir, (src)?src:"");

    if (fs.existsSync(src)) {

      var stats = fs.statSync(src);

      return (stats.isFile()) ? wrapTag(fs.readFileSync(src)) : wrapTag('\/* INVALID FILE PATH: ' + src + ' *\/');

    } else {

      return wrapTag('\/* INVALID FILE PATH: ' + src + ' *\/');

    }

  };

  function injectScript(file, enc, cb) {

    self = this;

    if (file.isNull()) {

      this.push(file);
      return cb(null, file);

    }

    if (file.isBuffer()) {

      var contents = String(file.contents);

      contents = contents.replace(new RegExp(MATCH_PATTERN), function(match, parameters) {

        var src = getSource(match);
        return getScript(src);

      });

      file.contents = new Buffer(contents);
      this.push(file);

      return cb();

    }

    return cb(null, file);

  };

  return through.obj(injectScript);

};
