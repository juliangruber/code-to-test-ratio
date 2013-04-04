var find    = require('findit').find;
var fs      = require('fs');
var map     = require('map-stream');

module.exports = getRatio;

var ignore = [
  'node_modules', 'example'
];

var source = [
  'js'
];

function getRatio (root, opts, cb) {
  if (!cb) {
    cb = opts;
    opts = {};
  }

  var loc = {
    test : 0,
    code : 0
  }

  var m = map(function (file, stat, done) {
    var rel = file.replace(root, '');
    var ext = rel.split('.').pop();
    var skip = false;

    if ((opts.source || source).indexOf(ext) == -1) skip = true;
    (opts.ignore || ignore).forEach(function (seg) {
      if (rel.indexOf(seg) > -1) skip = true;
    });

    if (skip) return done();
  
    fs.readFile(file, function (err, content) {
      if (err) return done(err);

      var lines = content.toString().match(/^.*([\n\r]+|$)/gm).length;

      rel.indexOf('test') > -1
        ? loc.test += lines
        : loc.code += lines;

      done();
    });
  })
  .on('error', cb)
  .on('end', function () {
    cb(null, loc.test / loc.code, loc);
  });

  find(root)
    .on('file', m.write.bind(m))
    .on('end', m.end.bind(m));
}
