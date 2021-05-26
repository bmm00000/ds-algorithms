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
	// my solution:
	// const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
	// const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
	// const objA = {};
	// for (let char of strA) {
	// 	objA[char] = objA[char] + 1 || 1;
	// }
	// const objB = {};
	// for (let char of strB) {
	// 	objB[char] = objB[char] + 1 || 1;
	// }
	// const results = [];
	// for (let key in objA) {
	// 	const res = objA[key] === objB[key];
	// 	results.push(res);
	// }
	// return (
	// 	strA.length === strB.length && results.every((result) => result === true)
	// );
	// my solution refactored:
	// const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
	// const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
	// const createObj = (str) => {
	// 	const obj = {};
	// 	for (let char of str) {
	// 		obj[char] = obj[char] + 1 || 1;
	// 	}
	// 	return obj;
	// };
	// const objA = createObj(strA);
	// const objB = createObj(strB);
	// const results = [];
	// for (let key in objA) {
	// 	results.push(objA[key] === objB[key]);
	// }
	// return (
	// 	strA.length === strB.length && results.every((result) => result === true)
	// );
	// first solution:
	// const aCharMap = buildCharMap(stringA);
	// const bCharMap = buildCharMap(stringB);
	// if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
	// 	return false;
	// }
	// for (let char in aCharMap) {
	// 	if (aCharMap[char] !== bCharMap[char]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// function buildCharMap(str) {
	// 	const charMap = {};
	// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
	// 		charMap[char] = charMap[char] + 1 || 1;
	// 	}
	// 	return charMap;
	// }
	// second solution:
	// const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
	// const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
	// const strAsorted = strA.split('').sort();
	// const strBsorted = strB.split('').sort();
	// if (strAsorted.length !== strBsorted.length) {
	// 	return false;
	// }
	// for (let i = 0; i < strAsorted.length; i++) {
	// 	if (strAsorted[i] !== strBsorted[i]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// another solution:
	// const strA = stringA.replace(/[^\w]/g, '').toLowerCase();
	// const strB = stringB.replace(/[^\w]/g, '').toLowerCase();
	// const strAsorted = strA.split('').sort().join('');
	// const strBsorted = strB.split('').sort().join('');
	// if (strAsorted === strBsorted) {
	// 	return true;
	// }
	// return cleanString(stringA) === cleanString(stringB);
	// function cleanString(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	// }
	// const mapA = mapper(cleaner(stringA));
	// const mapB = mapper(cleaner(stringB));
	// for (let key in mapA) {
	// 	if (mapA[key] !== mapB[key]) {
	// 		return false;
	// 	}
	// }
	// for (let key in mapB) {
	// 	if (mapB[key] !== mapA[key]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// function cleaner(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase();
	// }
	// function mapper(str) {
	// 	const map = {};
	// 	for (let char of str) {
	// 		map[char] = map[char] + 1 || 1;
	// 	}
	// 	return map;
	// }
	// REVISION:
	// word.replace(/[^\w]/g, "").toLowerCase()
	// my solution:
	// const cleanStr = (str) => {
	// 	return str.replace(/[^\w]/g, '').toLowerCase();
	// };
	// const strA = cleanStr(stringA);
	// const strB = cleanStr(stringB);
	// if (strA.length !== strB.length) {
	// 	return false;
	// }
	// const getMap = (str) => {
	// 	strMap = {};
	// 	for (let char of str) {
	// 		strMap[char] = strMap[char]++ || 1;
	// 	}
	// 	return strMap;
	// };
	// strAmap = getMap(strA);
	// strBmap = getMap(strB);
	// for (let char in strAmap) {
	// 	if (!(char in strBmap)) {
	// 		return false;
	// 	}
	// 	if (strAmap[char] !== strBmap[char]) {
	// 		return false;
	// 	}
	// }
	// return true;
	//
	// const strAmap = mapper(stringA);
	// const strBmap = mapper(stringB);
	// if (Object.keys(strAmap).length !== Object.keys(strBmap).length) {
	// 	return false;
	// }
	// for (let char in strAmap) {
	// 	if (strAmap[char] !== strBmap[char]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// // watch out! if you declare an arrow function, it does not hoist it!
	// function mapper(str) {
	// 	const strMap = {};
	// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
	// 		strMap[char] = strMap[char]++ || 1;
	// 	}
	// 	return strMap;
	// }
	//
	// sort() works with arrays, not strings!
	// return cleanStr(stringA) === cleanStr(stringB);
	// function cleanStr(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	// }
	//
	//
	// strAmap = mapper(stringA);
	// strBmap = mapper(stringB);
	// if (Object.keys(strAmap).length !== Object.keys(strBmap).length) {
	// 	return false;
	// }
	// for (let char in strAmap) {
	// 	// if(!(char in strBmap)){
	// 	// 	return false
	// 	// }
	// 	if (strAmap[char] !== strBmap[char]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// function mapper(str) {
	// 	const strMap = {};
	// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
	// 		strMap[char] = strMap[char]++ || 1;
	// 	}
	// 	return strMap;
	// }
	//
	// return cleanStr(stringA) === cleanStr(stringB);
	// function cleanStr(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	// }
	//
	//
	//
	// const mapA = mapper(stringA);
	// const mapB = mapper(stringB);
	// if (Object.keys(mapA).length !== Object.keys(mapB).length) {
	// 	return false;
	// }
	// for (let char in mapA) {
	// 	if (mapA[char] !== mapB[char]) {
	// 		return false;
	// 	}
	// }
	// return true;
	// function mapper(str) {
	// 	strMap = {};
	// 	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
	// 		strMap[char] = strMap[char]++ || 1;
	// 	}
	// 	return strMap;
	// }
	// return sorter(stringA) === sorter(stringB);
	// function sorter(str) {
	// 	return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
	// }
}

module.exports = anagrams;
