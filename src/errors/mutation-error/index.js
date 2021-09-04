class MutationError extends Error {
  constructor() {
    super('Limit of mutations reached');
  }
}

Object.defineProperty(MutationError.prototype, 'name', {
  value: 'MutationError',
});

module.exports = MutationError;
