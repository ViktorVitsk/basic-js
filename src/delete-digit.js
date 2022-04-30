const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  let str = n + "";
  for (let i = 0; i < str.length; i++) {
    let currentNum = str.substring(0, i) + str.substring(i + 1, str.length);
    max = max > +currentNum ? max : +currentNum;
  }
  return max;
}

module.exports = {
  deleteDigit,
};
