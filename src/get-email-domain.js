const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let indexDomain = email.lastIndexOf('@');
  let str = email.slice(indexDomain+1, email.length);
  return str;
}

module.exports = {
  getEmailDomain
};
