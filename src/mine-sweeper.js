const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix));

  matrix.forEach((row, y) => {
    row.forEach((currentCell, x) => {
      let count = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let yCurrent = y + i;
          let xCurrent = x + j;
          if (
            yCurrent < 0 ||
            xCurrent < 0 ||
            yCurrent > matrix.length - 1 ||
            xCurrent > matrix[0].length - 1 ||
            (yCurrent === y && xCurrent === x)
          ) {
            continue;
          } else {
            count += +matrix[yCurrent][xCurrent];
          }
        }
      }

      result[y][x] = count;
    });
  });
  return result;
}

module.exports = {
  minesweeper,
};
