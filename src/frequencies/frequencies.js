// Tuning scales that have been implemented
const scales = {
  EQUAL: 'equal', // Equal temperament
  JUST: 'just' // Just temperament
}

let currentScale = scales.EQUAL;

// Returns the frequency corresponding to the given piano note using the currently set scale
function getFrequency(note) {
  switch (currentScale) {
    case scales.EQUAL:
      return getFrequencyEqualTemperament(note);
    case scales.JUST:
      return getFrequencyJustTemperament(note);
    default:
      throw Error('Unimplemented Scale');
  }
}

// Returns the frequency corresponding to the given piano note using the equal temperament scale
function getFrequencyEqualTemperament(note) {
  return 440 * Math.pow(2, (note - 49) / 12);
}

// Returns the frequency corresponding to the given piano note using a just scale based on "A"
function getFrequencyJustTemperament(note) {
  if (note > 12) {
    return 2 * getFrequencyJustTemperament(note - 12);
  }

  let intervals = new Map([
    [1, 1/1],
    [2, 16/15],
    [3, 9/8],
    [4, 6/5],
    [5, 5/4],
    [6, 4/3],
    [7, 45/32],
    [8, 3/2],
    [9, 8/5],
    [10, 5/3],
    [11, 9/5],
    [12, 15/8],
  ]);

  return 27.5 * intervals.get(note);
}

function setScale(scale) {
  if (!Object.values(scales).includes(scale)) {
    throw Error("Invalid Scale");
  }

  currentScale = scale;
}

function getScale() {
  return currentScale;
}

exports.scales = scales;
exports.getFrequency = getFrequency;
exports.setScale = setScale;
exports.getScale = getScale;
