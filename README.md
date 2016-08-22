# run-with-mocha
[![Build Status](http://img.shields.io/travis/mohayonao/run-with-mocha.svg?style=flat-square)](https://travis-ci.org/mohayonao/run-with-mocha)
[![NPM Version](http://img.shields.io/npm/v/run-with-mocha.svg?style=flat-square)](https://www.npmjs.org/package/run-with-mocha)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> run with [mocha](https://mochajs.org/)

## Installation

```
npm install --save mocha run-with-mocha
```

## Usage

If run a script without `mocha` command, `run-with-mocha` re-executes the script with `mocha` command.
So, you can run tests directly without `mocha` command, for example using by [atom-runner](https://atom.io/packages/atom-runner).

```js
require("run-with-mocha");

const assert = require("assert");

describe("test", () => {
  it("ok", () => {
    assert(true);
  });
});
```

## License

MIT
