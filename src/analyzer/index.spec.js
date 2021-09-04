const analyzer = require('.');

describe('analyzer', () => {
  describe('hasMutation()', () => {
    it('should return false when dna is a 2x2 matrix', async () => {
      const dna = ['AA', 'TT'];
      expect(await analyzer.hasMutation(dna)).toBeFalsy();
    });

    it('should return false when dna is a 3x3 matrix', async () => {
      const dna = ['CCC', 'GGG', 'TTT'];
      expect(await analyzer.hasMutation(dna)).toBeFalsy();
    });

    it('should return false when dna has no mutations', async () => {
      const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAATG', 'CACGTA', 'TCACTG'];
      expect(await analyzer.hasMutation(dna)).toBeFalsy();
    });

    it('should return true when dna have more than one mutation', async () => {
      const dna = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
      expect(await analyzer.hasMutation(dna)).toBeTruthy();
    });

    it('should return true when dna have more than one Slash diagonal mutation', async () => {
      const dna = ['ATGCGA', 'CAGTAC', 'TTAAGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
      expect(await analyzer.hasMutation(dna)).toBeTruthy();
    });

    it('should return true when dna have more than one BackSlash diagonal mutation', async () => {
      const dna = ['ATGCGT', 'CAGTCC', 'GCAAGT', 'AGCAGG', 'CCGCTA', 'TCAGTG'];
      expect(await analyzer.hasMutation(dna)).toBeTruthy();
    });

    it('should return true when dna have more than one vertical mutation', async () => {
      const dna = ['GTGCGA', 'GAGTGC', 'GTATGT', 'GGAAGG', 'CCCCTA', 'TCACTG'];
      expect(await analyzer.hasMutation(dna)).toBeTruthy();
    });

    it('should return true when dna have more than one horizontal mutation', async () => {
      const dna = ['CCCCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
      expect(await analyzer.hasMutation(dna)).toBeTruthy();
    });
  });
});
