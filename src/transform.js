const { Transform } = require('stream');

const { ceaserCipher } = require('./ceaser');
const { AVAILABLE_ACTIONS } = require('./constants');

const createTransformStream = (action, shift) => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
      const result = ceaserCipher(chunk, action === AVAILABLE_ACTIONS.ENCODE ? Number(shift) : -Number(shift));
      callback(null, result);
    }
  });
  return transform;
}

module.exports = {
  createTransformStream,
};
