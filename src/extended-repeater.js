const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 */
function repeater(str, options) {
  let {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator,
  } = options;

  let result = "";
  repeatTimes = repeatTimes === undefined ? 1 : repeatTimes;
  additionRepeatTimes =
    additionRepeatTimes === undefined ? 1 : additionRepeatTimes;

  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition === undefined ? "" : addition + "";
      if (additionRepeatTimes > 0 && j < additionRepeatTimes - 1)
        result += additionSeparator === undefined ? "|" : additionSeparator;
    }
    if (i < repeatTimes - 1 && repeatTimes > 1)
      result += separator === undefined ? "+" : separator + "";
  }
  return result;
}

module.exports = {
  repeater,
};
