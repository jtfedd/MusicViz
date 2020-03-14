var assert = require('chai').assert;
var expect = require('chai').expect;
var frequencies = require('../src/frequencies/frequencies.js');

describe('frequencies', function() {
  describe('getScale', function() {
    it('returns the scale set', function() {
      frequencies.setScale(frequencies.scales.EQUAL);
      assert.equal(frequencies.getScale(), frequencies.scales.EQUAL);

      frequencies.setScale(frequencies.scales.JUST);
      assert.equal(frequencies.getScale(), frequencies.scales.JUST);
    })
  })

  describe('getScale', function() {
    it('sets the scale used in the package', function() {
      frequencies.setScale(frequencies.scales.EQUAL);
      assert.equal(frequencies.getScale(), frequencies.scales.EQUAL);

      frequencies.setScale(frequencies.scales.JUST);
      assert.equal(frequencies.getScale(), frequencies.scales.JUST);
    })

    it('throws an error if an improper scale is provided', function() {
      expect(function () {frequencies.setScale({})}).to.throw(Error, "Invalid Scale");
    })
  })

  describe('getFrequency', function() {
    describe('equal temperament scale', function() {
      beforeEach(function() {
        frequencies.setScale(frequencies.scales.EQUAL);
      })

      it('should return correct frequencies for notes', function() {
        expect(frequencies.getFrequency(1)).to.equal(27.5);
        expect(frequencies.getFrequency(31)).to.be.closeTo(155.5635, 0.0001);
        expect(frequencies.getFrequency(49)).to.equal(440);
        expect(frequencies.getFrequency(52)).to.be.closeTo(523.2511, 0.0001);
        expect(frequencies.getFrequency(77)).to.be.closeTo(2217.461, 0.001);
        expect(frequencies.getFrequency(85)).to.equal(3520);
        expect(frequencies.getFrequency(88)).to.be.closeTo(4186.009, 0.001);
      })
    })

    describe('just tuned scale', function() {
      beforeEach(function() {
        frequencies.setScale(frequencies.scales.JUST);
      })

      it('should return correct frequencies for notes', function() {
        expect(frequencies.getFrequency(1)).to.be.equal(27.5);
        expect(frequencies.getFrequency(8)).to.be.equal(41.25);
        expect(frequencies.getFrequency(49)).to.be.equal(440);
        expect(frequencies.getFrequency(85)).to.be.equal(3520);
      })
    })
  })
})