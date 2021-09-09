
/**
 * @param {Date} date 
 * @returns {string} date string in the format "dd. mm. yyyy"
 */
export function formatDate(date) {
  let d = date.getDate();
  if (d < 10) d = "0" + d;
  let m = date.getMonth() + 1;
  if (m < 10) m = "0" + m;
  let y = date.getFullYear();
  return d + ". " + m + ". " + y + ".";
}