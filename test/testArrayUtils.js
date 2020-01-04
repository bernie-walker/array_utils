const { assert } = require('chai');
const {
  partition,
  getLast,
  getFirst,
  elementsFromSecond
} = require('../src/arrayUtils');

describe('partition', function() {
  it('should make partition based on the quality given', function() {
    const isEven = num => (num & 1) === 0;
    const actual = partition(isEven, [1, 2, 4, 3, 5, 6]);
    const expected = [[1], [2, 4], [3, 5], [6]];
    assert.deepStrictEqual(actual, expected);
  });

  it('should not have any groups when no subsequent elements have same qulity', function() {
    const isOdd = num => (num & 1) === 1;
    const actual = partition(isOdd, [1, 2, 3, 4, 5]);
    const expected = [[1], [2], [3], [4], [5]];
    assert.deepStrictEqual(actual, expected);
  });

  it('should group all together when all the elements have same quality', function() {
    const isMulOf3 = num => num % 3 === 0;
    const actual = partition(isMulOf3, [3, 6, 9, 12]);
    const expected = [[3, 6, 9, 12]];
    assert.deepStrictEqual(actual, expected);
  });

  it('should not alter an empty array', function() {
    const actual = partition(() => {}, []);
    const expected = [];
    assert.deepStrictEqual(actual, expected);
  });
});

describe('getLast', function() {
  it('should get the last element of the array', function() {
    const actual = getLast([1, 2, 3]);
    assert.strictEqual(actual, 3);
  });
});

describe('getFirst', function() {
  it('should get the first element of the array', function() {
    const actual = getFirst([1, 2, 3]);
    assert.strictEqual(actual, 1);
  });
});

describe('elementsFromSecond', function() {
  it('should slice from the second element of the given array', function() {
    const actual = elementsFromSecond([1, 2, 3, 4, 5]);
    const expected = [3, 4, 5];
    assert.deepStrictEqual(actual, expected);
  });
});
