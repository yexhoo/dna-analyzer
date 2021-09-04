const { BAD_SEQUENCE_NUMBER } = require('../../constant');
const { getAllBackSlash, getAllSlash } = require('../diagonal');

const getValidDiagonals = (diagonals) => diagonals
  .filter((row) => row.length >= BAD_SEQUENCE_NUMBER);

module.exports.size = (dna) => dna[0].length;

module.exports.getTranspose = (matrix) => matrix[0].map((col, i) => matrix.map((row) => row[i]));

module.exports.getDiagonals = (matrix) => getValidDiagonals(getAllBackSlash(matrix))
  .concat(getValidDiagonals(getAllSlash(matrix)));

module.exports.parse = (dna) => {
  const matrix = [];
  let i = 0;

  dna.forEach((row) => {
    matrix[i] = [...row];
    i++;
  });

  return matrix;
};
