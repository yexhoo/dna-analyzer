const validator = require('.');

const { NOT_EMPTY, NOT_AN_ARRAY, ROW_MUST_TO_BE_STRING } = require('../../errors');
const { ROW_MUST_TO_HAVE_SAME_LENGTH, MUST_TO_BE_NXN_MATRIX, NOT_ALLOWED_VALUES } = require('../../errors');

describe('validator', () => {
  describe('check()', () => {
    it('should return error when dna is empty', () => {
      expect(() => validator.check()).toThrow(NOT_EMPTY);
      expect(() => validator.check('')).toThrow(NOT_EMPTY);
    });

    it('should return error when dna is not an array', () => {
      expect(() => validator.check('s')).toThrow(NOT_AN_ARRAY);
      expect(() => validator.check(999)).toThrow(NOT_AN_ARRAY);
      expect(() => validator.check({ msg: 'Hello world!!!' })).toThrow(NOT_AN_ARRAY);
    });

    it('should return error when dna rows are not strings', () => {
      let dna = [1, 2, 3];
      expect(() => validator.check(dna)).toThrow(ROW_MUST_TO_BE_STRING);

      dna = [{ id: '1' }, { id: '2' }, { id: '2' }];
      expect(() => validator.check(dna)).toThrow(ROW_MUST_TO_BE_STRING);

      dna = [true, false, false];
      expect(() => validator.check([true, false, false])).toThrow(ROW_MUST_TO_BE_STRING);
    });

    it('should return error when dna rows have no the same length', () => {
      const dna = ['1', '123', '12'];
      expect(() => validator.check(dna)).toThrow(ROW_MUST_TO_HAVE_SAME_LENGTH);
    });

    it('should return error when dna is not an NxN matrix', () => {
      const dna = ['123'];
      expect(() => validator.check(dna)).toThrow(MUST_TO_BE_NXN_MATRIX);
    });

    it('should return error when dna rows values are different than [A, T, C, G]', () => {
      const dna = ['1G', '3C'];
      expect(() => validator.check(dna)).toThrow(NOT_ALLOWED_VALUES);
    });

    it('should not return error when all dna validations are success', () => {
      const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
      expect(() => validator.check(dna)).not.toThrow(Error);
    });
  });
});
