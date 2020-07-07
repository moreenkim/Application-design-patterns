const assert = require('assert');
const { forEach, map } = require('./index');

const test = (desc, fn) => {
  console.log('---', desc);
  try {
    fn();
  } catch (err) {
    console.log(err.message);
  }
};

test('for each function', () => {
  let sum = 0;
  forEach([1, 2, 3], (value) => {
    sum += value;
  });

  assert.strictEqual(sum, 6, 'expected foeEach to sum array');

  if (sum !== 6) {
    throw new Error('expected sum of 6');
  }
});

test('map function', () => {
  const result = map([1, 2, 3], (value) => {
    return value * 2;
  });

  // assert.strictEqual(result[0], 2);
  // assert.strictEqual(result[1], 4);
  // assert.strictEqual(result[2], 6);

  assert.deepStrictEqual(result, [2, 4, 8]);
});
