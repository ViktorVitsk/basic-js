const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    value = arguments.length === 0 ? "" : value;
    this.chain.push("( " + value + " )");
    return chainMaker;
  },
  removeLink(position) {
    if (position % 1 === 0 && position < this.chain.length && position > 0) {
      this.chain.splice(position - 1, 1);
      return chainMaker;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    const result = this.chain.join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
