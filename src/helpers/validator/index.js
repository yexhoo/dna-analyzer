const { size } = require('../matrix');

const { ALLOWED_CHARS } = require('../../constant');
const { NOT_EMPTY, NOT_AN_ARRAY, ROW_MUST_TO_BE_STRING } = require('../../errors');
const { ROW_MUST_TO_HAVE_SAME_LENGTH, MUST_TO_BE_NXN_MATRIX, NOT_ALLOWED_VALUES } = require('../../errors');

module.exports.check = (dna) => {
  if (!dna) {
    throw new Error(NOT_EMPTY);
  }

  if (!Array.isArray(dna)) {
    throw new Error(NOT_AN_ARRAY);
  }

  if (dna.some((row) => (typeof row) !== 'string')) {
    throw new Error(ROW_MUST_TO_BE_STRING);
  }

  if (dna.some((row) => row.length !== size(dna))) {
    throw new Error(ROW_MUST_TO_HAVE_SAME_LENGTH);
  }

  if (dna.length !== size(dna)) {
    throw new Error(MUST_TO_BE_NXN_MATRIX);
  }

  dna.forEach((row) => {
    [...row].forEach((char) => {
      if (!ALLOWED_CHARS.includes(char)) {
        throw new Error(NOT_ALLOWED_VALUES);
      }
    });
  });
};
