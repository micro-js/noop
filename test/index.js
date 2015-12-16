/**
 * Imports
 */

var noop = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should do nothing', function (t) {
  t.equal(typeof fn, 'function');
	t.equal(fn(), undefined);
  t.end()
})
