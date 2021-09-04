const getAllDiagonals = (matrix, isBackslash) => {
  const Ylength = matrix.length;
  const Xlength = matrix[0].length;
  const maxLength = Math.max(Xlength, Ylength);
  let temp;
  const returnArray = [];
  for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
    temp = [];
    for (let y = Ylength - 1; y >= 0; --y) {
      const x = k - (isBackslash ? Ylength - y : y);
      if (x >= 0 && x < Xlength) {
        temp.push(matrix[y][x]);
      }
    }
    if (temp.length > 0) {
      returnArray.push(temp);
    }
  }
  return returnArray;
};

module.exports.getAllSlash = (matrix) => getAllDiagonals(matrix, false);
module.exports.getAllBackSlash = (matrix) => getAllDiagonals(matrix, true);
