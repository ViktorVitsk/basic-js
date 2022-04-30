const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(crypt) {
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.directEncryption =
      crypt === true || arguments.length === 0 ? true : false;
    this.table = VigenereCipheringMachine.getTable(this.alphabet);
  }

  static getTable(alphabet) {
    const result = [];
    let row = "";
    for (let i = 0; i < alphabet.length; i++) {
      row = alphabet.slice(i) + alphabet.slice(0, i);
      result.push(row.split(""));
    }
    return result;
  }

  encrypt(forCrypt, key) {
    if (
      arguments.length != 2 ||
      typeof arguments[0] !== "string" ||
      typeof arguments[1] !== "string"
    ) {
      throw new Error("Incorrect arguments!");
    }
    forCrypt = forCrypt.toUpperCase();
    key = key.toUpperCase();
    let longKey = VigenereCipheringMachine.getLongKey(
      forCrypt,
      key,
      this.alphabet
    );
    let keyY, keyX;
    let result = "";
    for (let i = 0; i < forCrypt.length; i++) {
      if (this.alphabet.includes(forCrypt[i])) {
        keyY = this.alphabet.indexOf(forCrypt[i]);
        keyX = this.alphabet.indexOf(longKey[i]);
        result += this.table[keyY][keyX];
      } else {
        result += forCrypt[i];
      }
    }
    return this.directEncryption ? result : result.split("").reverse().join("");
  }

  static getLongKey(forCrypt, key, alphabet) {
    let index = 0;
    let result = "";
    for (let i = 0; i < forCrypt.length; i++) {
      if (alphabet.includes(forCrypt[i])) {
        result += key[index % key.length];
        index++;
      } else {
        result += forCrypt[i];
      }
    }
    return result;
  }

  decrypt(forCrypt, key) {
    if (
      arguments.length != 2 ||
      typeof arguments[0] !== "string" ||
      typeof arguments[1] !== "string"
    ) {
      throw new Error("Incorrect arguments!");
    }
    forCrypt = forCrypt.toUpperCase();
    key = key.toUpperCase();
    let longKey = VigenereCipheringMachine.getLongKey(
      forCrypt,
      key,
      this.alphabet
    );
    let keyY, keyX;
    let result = "";
    for (let i = 0; i < forCrypt.length; i++) {
      if (this.alphabet.includes(forCrypt[i])) {
        keyX = this.alphabet.indexOf(longKey[i]);
        keyY = this.table[keyX].indexOf(forCrypt[i]);
        result += this.alphabet[keyY];
      } else {
        result += forCrypt[i];
      }
    }
    return this.directEncryption ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
