// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	// REVISION:
	// const strObj = {};
	// let maxFreq = 0;
	// let maxChar = '';

	// for (let char of str) {
	// 	// strObj[char] ? strObj[char]++ : (strObj[char] = 1);
	// 	strObj[char] = strObj[char]++ || 1;
	// }

	// for (let key in strObj) {
	// 	if (strObj[key] > maxFreq) {
	// 		maxFreq = strObj[key];
	// 		maxChar = key;
	// 	}
	// }
	// return maxChar;

	const strMap = {};

	for (let char of str) {
		strMap[char] = strMap[char]++ || 1;
	}

	let maxChar = '';
	let maxFreq = 0;

	for (let char in strMap) {
		if (strMap[char] > maxFreq) {
			maxFreq = strMap[char];
			maxChar = char;
		}
	}
	return maxChar;
}

module.exports = maxChar;
