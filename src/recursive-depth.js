const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, current = 0, max = 0) {
    if (current === 0 && max === 0) {
      current = 1;
      max = 1;
    }

    arr.forEach((el) => {
      max = max > 1 ? max : 1;
      if (Array.isArray(el)) {
        current++;
        max = max > current ? max : current;
        max = this.calculateDepth(el, current, max);
        current--;
      }
    });
    return max;
  }
}

module.exports = {
  DepthCalculator,
};
