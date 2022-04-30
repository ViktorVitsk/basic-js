const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  // if (!Array.isArray(test)) return false;
  let stringOfMembers;
  try {
    stringOfMembers = members.filter((w) => typeof w === "string");
  } catch (error) {
    return false;
  }

  let firstLetter = stringOfMembers.map((w) => {
    let i = 0;
    while (w[i] === " ") {
      i++;
    }
    return w.slice(i, i + 1).toUpperCase();
  });
  return firstLetter.sort().join("");
}

module.exports = {
  createDreamTeam,
};
