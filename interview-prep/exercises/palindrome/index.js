// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// return str.split('').reverse().join('') === str;
	//
	// in the following two solutions, there is an issue: we will duplicate comparisons when we pass the middle point:
	//
	// for (let i = 0; i < str.length; i++) {
	// 	if (str[i] !== str[str.length - 1 - i]) {
	// 		return false;
	// 	}
	// }
	// return true;
	//
	// return str.split('').every((char, i) => char === str[str.length - 1 - i]);
	//
	// the time complexity of all solutions is O(n)
}

module.exports = palindrome;
