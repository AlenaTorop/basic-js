const { NotImplementedError } = require('../extensions/index.js');

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
  let str = n.toString();
  let arr = [];
  for(let i =0; i<str.length; i++) {
    let num = +(str.substring(0, i) + str.substring(i + 1));
    // console.log('str1 ' + str.substring(0, i))
    // console.log('str2 ' + str.substring(i+1))
    arr.push(num)
  }
  return Math.max(...arr)
}
module.exports = {
  deleteDigit
};
