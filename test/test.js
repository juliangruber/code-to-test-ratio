var test = require('tap').test;
var getRatio = require('..');

test('ratio', function (t) {
  getRatio(__dirname + '/..', function (err, ratio, loc) {
    t.notOk(err);
    t.ok(ratio);
    t.ok(loc);
    t.ok(loc.test);
    t.ok(loc.code);
    t.end();
  });
});
