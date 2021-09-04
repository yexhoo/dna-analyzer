const rows = require('../rows');
const { BAD_SEQUENCE_LIMIT } = require('../../constant');
const MutationError = require('../../errors/mutation-error');

module.exports.get = (matrix) => new Promise((resolve, reject) => {
  let mutations = 0;
  for (const row of matrix) {
    if (rows.hasSequence(row)) {
      mutations++;
      if (mutations > BAD_SEQUENCE_LIMIT) {
        reject(new MutationError());
      }
    }
  }

  resolve(mutations);
});
