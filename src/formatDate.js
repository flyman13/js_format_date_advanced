'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const fromSeparator = fromFormat[fromFormat.length - 1];
  const toSeparator = toFormat[toFormat.length - 1];
  const dateParts = date.split(fromSeparator);

  let year, month, day;

  for (let i = 0; i < fromFormat.length - 1; i++) {
    switch (fromFormat[i]) {
      case 'YYYY':
        year = dateParts[i]
        break;
      case 'MM':
        month = dateParts[i]
        break;
      case 'DD':
        day = dateParts[i]
        break;
    }
  }

  let formatDate = [year, month, day].join(toSeparator);
  
  return formatDate;
}

module.exports = formatDate;
