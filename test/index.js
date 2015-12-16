/**
 * Imports
 */

var noop = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should do nothing', function (t) {
  t.equal(typeof noop, 'function');
	t.equal(noop(), undefined);
  t.end()
})
