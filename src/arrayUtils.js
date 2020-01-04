const getFirst = function(array) {
  return array[0];
};

const getLast = function(array) {
  return array[array.length - 1];
};

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

module.exports = { partition, getLast, getFirst };
