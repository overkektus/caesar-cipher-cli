const { checkIsEnglishAlphabet, checkIsUpperCase } = require('./helpers');
const { NUMBER_OF_LETTERS, ENGLISH_ALPHABET_ASCII_RANGES } = require('./constants');

const {
  LOWER_CASE_LOWER_BOUND,
  UPPER_CASE_LOWER_BOUND,
} = ENGLISH_ALPHABET_ASCII_RANGES;

const ceaserCipher = (buf, shift) => {
  const asciiChunkBuf = new Buffer.from(buf, 'ascii');

  const shiftedAsciiChunkBuf = asciiChunkBuf.map(element => {
    if (shift < 0) {
      shift = shift % NUMBER_OF_LETTERS + NUMBER_OF_LETTERS;
    }

    const isEnglishAlphabet = checkIsEnglishAlphabet(element);

    if (isEnglishAlphabet) {
      if (checkIsUpperCase(element)) {
        return ((element - UPPER_CASE_LOWER_BOUND + shift) % 26) + UPPER_CASE_LOWER_BOUND;
      }
      if (!checkIsUpperCase(element)) {
        return ((element - LOWER_CASE_LOWER_BOUND + shift) % 26) + LOWER_CASE_LOWER_BOUND;
      }
    }
    return element;
  });

  return shiftedAsciiChunkBuf;
}

module.exports = {
  ceaserCipher,
};
