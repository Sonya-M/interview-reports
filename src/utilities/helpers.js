
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

export function formatDateForHtmlInput(date) {
  let d = date.getDate();
  if (d < 10) d = "0" + d;
  let m = date.getMonth() + 1;
  if (m < 10) m = "0" + m;
  let y = date.getFullYear();
  return ([y, m, d]).join("-");
}
/**
 * 
 * @param {string} stringToSearch 
 * @param {string} queryString 
 * @returns true if stringToSearch includes all of the words in query string, 
 * in any order (so if one types the surname before the first name,
 * the return val is still true)
 */
export const includesIgnoreCase = (stringToSearch, queryString) => {
  if (queryString.length === 0) return true;
  queryString = (queryString.trim());
  let queries = queryString.split(/\s+/);

  for (let i = 0; i < queries.length; i++) {
    if (i === queries.length - 1) queries[i] = new RegExp("\\b" + queries[i], "i");
    else queries[i] = new RegExp("\\b" + queries[i] + "\\b", "i");
  }
  for (let i = 0; i < queries.length; i++) {
    if (!stringToSearch.match(queries[i])) return false;
  }

  return true;
};
