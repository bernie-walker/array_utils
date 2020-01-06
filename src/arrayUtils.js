const partition = function(quality, array) {
  const result = [];

  for (let index = 0; index < array.length; index++) {
    if (quality(array[index - 1]) == quality(array[index])) {
      result[result.length - 1].push(array[index]);
    } else {
      result.push([array[index]]);
    }
  }

  return result;
};

const mapTwo = function(mapper, array1, array2) {
  if (array1.length === 0) return [];
  const result = [mapper(array1[0], array2[0])];

  return result.concat(mapTwo(mapper, array1.slice(1), array2.slice(1)));
};

const getLast = function(array) {
  return array[array.length - 1];
};

const getFirst = function(array) {
  return array[0];
};

const elementsFromSecond = function(array) {
  return array.slice(2);
};

module.exports = { partition, mapTwo, getLast, getFirst, elementsFromSecond };
