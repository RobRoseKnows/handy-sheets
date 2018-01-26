/**
 * This custom function creates an array [start, end). Designed for use in Google Sheets.
 *
 * @param {number} start The starting place of the array, inclusive.
 * @param {number} end The ending place of the array, exclusive.
 * @return An array containing items [start, end), end being exclusive. Similar to Python range()
 * @customfunction
 */
function RANGE(start, end) {
	var arr = []
	var range_len = end - start;
	arr = Array.from(new Array(range_len), (x,i) => i + start);
	return arr;
}