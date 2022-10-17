const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  }
  if (typeof sampleActivity === 'string' && sampleActivity.length === 0) {
    return false;
  }
  let numberSampleActivity = Number(sampleActivity);
  if(Number.isNaN(numberSampleActivity) || numberSampleActivity <= 0 || numberSampleActivity > MODERN_ACTIVITY) {
    return false;
  }
    const k = 0.693 / HALF_LIFE_PERIOD;
    let res = Math.ceil(Math.log(MODERN_ACTIVITY/numberSampleActivity)/k);
    return res;

}

module.exports = {
  dateSample
};
