// Tuning scales that have been implemented
const scales = {
  EQUAL: 'equal' // Equal temperament
}

let currentScale = scales.EQUAL;

// Returns the frequency corresponding to the given piano note using the currently set scale
function getFrequency(note) {
  switch (currentScale) {
    case scales.EQUAL:
      return getFrequencyEqualTemperament(note);
    default:
      throw "Unimplemented Scale"
  }
}

// Returns the frequency corresponding to the given piano note using the equal temperament scale
function getFrequencyEqualTemperament(note) {
  return 440 * Math.pow(2, (note - 49) / 12)
}
