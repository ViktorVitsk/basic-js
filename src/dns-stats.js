const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrDNS = domains.map((address) => address.split(".").reverse());
  const result = {};
  arrDNS.forEach((arr) => {
    let first = "." + arr[0];
    if (result[first] === undefined) {
      result[first] = 1;
    } else {
      result[first] += 1;
    }

    let second = first + "." + arr[1];
    if (result[second] === undefined) {
      result[second] = 1;
    } else {
      result[second] += 1;
    }

    if (arr.length > 2) {
      let third = second + "." + arr[2];
      if (result[third] === undefined) {
        result[third] = 1;
      } else {
        result[third] += 1;
      }
    }
    if (arr.length > 3) {
      let fourth = third + "." + arr[3];
      if (result[fourth] === undefined) {
        result[fourth] = 1;
      } else {
        result[fourth] += 1;
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats,
};
