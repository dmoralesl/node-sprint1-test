const { div, mul, sub, sum } = require('../app/operations');

// LEVEL 1
test('adds 1 + 2 equal to 3', () => {
    expect(sum([1, 2])).toBe(3);
});