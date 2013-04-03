
# code-to-test-ratio

Get the code to test ratio of any project! This also works for
Non-JavaScript code.

## Usage

```js
var getRatio = require('code-to-test-ratio');

getRatio(__dirname, function (err, ratio, loc) {
  if (err) throw err;
  console.log('Code to test ratio: ' + ratio);
  console.log('LOC Code: ' + loc.code);
  console.log('LOC Test: ' + loc.test);
});
```

Output for this module:

```bash
$ node example/simple.js
Code to test ratio: 0.23728813559322035
LOC Code: 59
LOC Test: 14
```

Wow, 24%, I hope you do better!

## API

### getRatio(directory[, opts], fn)

Get the code-to-test ratio for all files in `directory` and call `fn` with
`(err, ratio, loc)`.

By default everything in `node_modules` and `example` is ignored.
You can overwrite this by passing an Array of path segments to
`opts.ignore`.

By default everything that has an extension that is not `js` is ignored.
You can overwrite this by passing an Array of valid extensions to
`opts.source`.

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install code-to-test-ratio
```

## License

(MIT)

Copyright (c) 2013 Julian Gruber &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
