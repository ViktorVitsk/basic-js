const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = [];
  let count = 0;
  while (arr.includes(-1)) {
    let currentIndex = arr.indexOf(-1);
    index.push(currentIndex + count++);
    arr.splice(currentIndex, 1);
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  index.forEach((i) => arr.splice(i, 0, -1));
  return arr;
}

module.exports = {
  sortByHeight,
};
