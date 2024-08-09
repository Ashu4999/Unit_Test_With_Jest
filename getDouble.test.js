const { getDouble } = require('./getDouble');

test('getDouble should return double the input number', () => {
  expect(getDouble(2)).toBe(4);
  expect(getDouble(0)).toBe(0);
  expect(getDouble(-3)).toBe(-6);
  expect(getDouble(1.5)).toBe(3);
});

test('getDouble should handle edge cases', () => {
  expect(getDouble(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER * 2);
  expect(getDouble(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER * 2);
});