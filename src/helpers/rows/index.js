const { BAD_SEQUENCE_NUMBER } = require('../../constant');

module.exports.hasSequence = (row) => {
  let hasSequence = false;
  let count;
  let current;
  let next;

  count = 1;
  for (let i = 0; i < row.length; i++) {
    current = row[i];
    next = row[i + 1];

    if (current === next) {
      count++;
      if (count >= BAD_SEQUENCE_NUMBER) {
        hasSequence = true;
        break;
      }
    } else {
      count = 1;
    }
  }

  return hasSequence;
};
