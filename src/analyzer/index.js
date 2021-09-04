const mutation = require('../helpers/mutation');
const { check } = require('../helpers/validator');
const { parse, size } = require('../helpers/matrix');
const MutationError = require('../errors/mutation-error');
const { getDiagonals, getTranspose } = require('../helpers/matrix');
const { BAD_SEQUENCE_NUMBER, BAD_SEQUENCE_LIMIT } = require('../constant');

module.exports.hasMutation = async (dna) => {
  let mutations = 0;
  let hasMutation = false;

  check(dna);

  if (size(dna) < BAD_SEQUENCE_NUMBER) {
    return hasMutation;
  }

  const matrix = parse(dna);

  const mutationsArray = [];
  mutationsArray.push(mutation.get(matrix));
  mutationsArray.push(mutation.get(getTranspose(matrix)));
  mutationsArray.push(mutation.get(getDiagonals(matrix)));

  const mutationsArrayResult = await Promise.all(mutationsArray)
    .catch((err) => {
      if (err instanceof MutationError) {
        hasMutation = true;
      } else {
        throw (err);
      }
    });

  if (hasMutation) {
    return hasMutation;
  }

  mutations = mutationsArrayResult.reduce((a, b) => a + b, 0);

  if (mutations > BAD_SEQUENCE_LIMIT) {
    hasMutation = true;
  }

  return hasMutation;
};
