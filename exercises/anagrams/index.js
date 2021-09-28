// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// word.replace(/[^\w]/g, "").toLowerCase()

function anagrams(stringA, stringB) {
	// const aCharMap = buildStrMap(cleanStr(stringA));
	// const bCharMap = buildStrMap(cleanStr(stringB));
	// if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
	// 	return false;
	// }
	// for (let key in aCharMap) {
	// 	if (aCharMap[key] !== bCharMap[key]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// // the reason why we use helper functions is that we have to do the same thing twice, use helper functions every time you need to do something more than once
	// function cleanStr(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase();
	// }
	// // keep in mind that, if you use arrow functions, they don't hoist and you cannot place them below as we are doing now:
	// function buildStrMap(str) {
	// 	const strMap = {};
	// 	for (let char of str) {
	// 		strMap[char] = strMap[char]++ || 1;
	// 	}
	// 	return strMap;
	// }
	//
	//
	//
	// with the solution above, keep in mind that we are iterating 3 times (twice to build the maps, and once to compare). keep in mind this for the next solution, since in the future we will be able to compare them, for performance considerations:
	// return (
	// 	cleanStr(stringA).split('').sort().join('') ===
	// 	cleanStr(stringB).split('').sort().join('')
	// );
	// function cleanStr(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase();
	// }
	//
	// or even better:
	// const cleaner = (str) => {
	// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	// };
	// return cleaner(stringA) === cleaner(stringB);
	// therefore, we have an iterative approach and another solutions based on methods.
	//
	//
	//
}

module.exports = anagrams;
