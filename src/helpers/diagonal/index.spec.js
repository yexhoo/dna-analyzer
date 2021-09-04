const diagonal = require('.');

describe('diagonal', () => {
  describe('getBackSlash()', () => {
    it('should return an array with all BackSlash diagonals', () => {
      const matrix = [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P'],
      ];

      const expected = [
        ['M'],
        ['N', 'I'],
        ['O', 'J', 'E'],
        ['P', 'K', 'F', 'A'],
        ['L', 'G', 'B'],
        ['H', 'C'],
      ];
      expect(diagonal.getAllBackSlash(matrix)).toEqual(expected);
    });
  });

  describe('getSlash()', () => {
    it('should return an array with all Slash diagonals', () => {
      const matrix = [
        ['A', 'B', 'C', 'D'],
        ['E', 'F', 'G', 'H'],
        ['I', 'J', 'K', 'L'],
        ['M', 'N', 'O', 'P'],
      ];

      const expected = [
        ['A'],
        ['E', 'B'],
        ['I', 'F', 'C'],
        ['M', 'J', 'G', 'D'],
        ['N', 'K', 'H'],
        ['O', 'L'],
        ['P'],
      ];
      expect(diagonal.getAllSlash(matrix)).toEqual(expected);
    });
  });
});
