import { describe, it, expect, beforeEach } from 'vitest'
import { setScale, scales, getScale, getFrequency } from './frequencies.js';

describe('frequencies', function() {
  describe('getScale', function() {
    it('returns the scale set', function() {
      setScale(scales.EQUAL);
      expect(getScale()).toBe(scales.EQUAL);

      setScale(scales.JUST);
      expect(getScale()).toBe(scales.JUST);
    })
  })

  describe('getScale', function() {
    it('sets the scale used in the package', function() {
      setScale(scales.EQUAL);
      expect(getScale()).toBe(scales.EQUAL);

      setScale(scales.JUST);
      expect(getScale()).toBe(scales.JUST);
    })

    it('throws an error if an improper scale is provided', function() {
      expect(function () {setScale({})}).toThrow(Error, "Invalid Scale");
    })
  })

  describe('getFrequency', function() {
    describe('equal temperament scale', function() {
      beforeEach(function() {
        setScale(scales.EQUAL);
      })

      it('should return correct frequencies for notes', function() {
        expect(getFrequency(1)).toEqual(27.5);
        expect(getFrequency(31)).toBeCloseTo(155.5635, 0.0001);
        expect(getFrequency(49)).toEqual(440);
        expect(getFrequency(52)).toBeCloseTo(523.2511, 0.0001);
        expect(getFrequency(77)).toBeCloseTo(2217.461, 0.001);
        expect(getFrequency(85)).toEqual(3520);
        expect(getFrequency(88)).toBeCloseTo(4186.009, 0.001);
      })
    })

    describe('just tuned scale', function() {
      beforeEach(function() {
        setScale(scales.JUST);
      })

      it('should return correct frequencies for notes', function() {
        expect(getFrequency(1)).toBe(27.5);
        expect(getFrequency(8)).toBe(41.25);
        expect(getFrequency(49)).toBe(440);
        expect(getFrequency(85)).toBe(3520);
      })
    })
  })
})