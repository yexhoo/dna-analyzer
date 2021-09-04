const helper = require('.');

describe('rows', () => {
  describe('hasSequence()', () => {
    let row;

    beforeEach(() => {
      row = [];
    });

    it('should return true where the array has sequence at the beginning', () => {
      row = ['C', 'C', 'C', 'C', 'T', 'A'];
      expect(helper.hasSequence(row)).toBeTruthy();
    });

    it('should return true where the array has sequence at the middle', () => {
      row = ['A', 'G', 'A', 'A', 'A', 'A', 'C', 'T', 'A'];
      expect(helper.hasSequence(row)).toBeTruthy();
    });

    it('should return true where the array has sequence at the end', () => {
      row = ['T', 'A', 'A', 'G', 'T', 'T', 'T', 'T'];
      expect(helper.hasSequence(row)).toBeTruthy();
    });

    it('should return false when the array is empty', () => {
      row = [];
      expect(helper.hasSequence(row)).toBeFalsy();
    });

    it('should return false when the array has one element', () => {
      row = ['A'];
      expect(helper.hasSequence(row)).toBeFalsy();
    });

    it('should return false when the array has no sequence of characters', () => {
      row = ['A', 'T', 'C', 'G'];
      expect(helper.hasSequence(row)).toBeFalsy();
    });
  });
});
