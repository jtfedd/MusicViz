var frequencies = require('../src/js/frequencies/frequencies.js');
var assert = require('chai').assert;

describe('frequencies', function() {
  describe('getFrequencyEqualTemperament', function() {
    it('should return correct frequencies for notes', function() {
      assert.equal(getFrequencyEqualTemperament(49), 440);
    })
  })
})