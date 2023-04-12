const mathOperation = require('./index')

test('Adds  2 values', () => {
  expect(mathOperation.sum(5, 10)).toBe(15)
})

test('Diff of 2 values', () => {
  expect(mathOperation.diff(4, 1)).toBe(3)
})

test('Product of 2 values', () => {
  expect(mathOperation.product(8, 9)).toBe(72)
})
