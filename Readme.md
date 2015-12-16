# noop

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

noop function

## Installation

    $ npm install @f/noop

## Usage

```js
var noop = require('@f/noop')

function foo (fn) {
    fn = fn || noop;
    return fn('bar');
}
foo();
```

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/noop.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/noop
[git-image]: https://img.shields.io/github/tag/micro-js/noop.svg
[git-url]: https://github.com/micro-js/noop
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/noop.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/noop
