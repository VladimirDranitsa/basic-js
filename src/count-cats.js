import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 export default function countCats( matrix ) {

  let numberOfCats = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let e = 0; e < matrix[i].length; e++) {
      if ( matrix[i][e] === '^^') {
        numberOfCats++
      }
    }
  }
  return numberOfCats
}
