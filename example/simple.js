var getRatio = require('..');

getRatio(__dirname + '/..', function (err, ratio, loc) {
  if (err) throw err;
  console.log('Code to test ratio: ' + ratio);
  console.log('LOC Code: ' + loc.code);
  console.log('LOC Test: ' + loc.test);
});
