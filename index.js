const moment = require('moment-timezone')

/**
 * 
 * @param {string} location 
 * @param {string} format 
 * @returns {string}
 */
const getTimeOfTimeZone = (location, format) => {
  const time = moment().tz(location).format(format)
  return time
}

module.exports = {
  getTimeOfTimeZone,
}
