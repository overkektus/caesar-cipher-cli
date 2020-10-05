const { ENGLISH_ALPHABET_ASCII_RANGES } = require('./constants');

const {
  LOWER_CASE_LOWER_BOUND,
  LOWER_CASE_UPPER_BOUND,
  UPPER_CASE_LOWER_BOUND,
  UPPER_CASE_UPPER_BOUND,
} = ENGLISH_ALPHABET_ASCII_RANGES;

const checkIsEnglishAlphabet = (asciiCharCode) => {
  if (UPPER_CASE_LOWER_BOUND <= asciiCharCode && asciiCharCode <= UPPER_CASE_UPPER_BOUND)
    return true;

  if (LOWER_CASE_LOWER_BOUND <= asciiCharCode && asciiCharCode <= LOWER_CASE_UPPER_BOUND)
    return true;

  return false;
};

const checkIsUpperCase = (asciiCharCode) => {
  if (UPPER_CASE_LOWER_BOUND <= asciiCharCode && asciiCharCode <= UPPER_CASE_UPPER_BOUND)
    return true;
  return false;
};

module.exports = {
  checkIsEnglishAlphabet,
  checkIsUpperCase,
};
