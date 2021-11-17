// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	// // the problem with the following solution is that if get a non-letter character as first character (for example, initial question mark in Spanish), we wouldn't want to capitalize it:
	// let capStr = '';
	// for (let i = 0; i < str.length; i++) {
	// 	const last = str[i - 1];
	// 	if (!last || last === ' ') {
	// 		capStr += str[i].toUpperCase();
	// 	} else {
	// 		capStr += str[i];
	// 	}
	// }
	// return capStr;
	// // you can also do the following: let capStr = str[0].toUpperCase(), and  then start iterating in the loop from i = 1
	//
	//
	//
	// good news, slice method works with both arrays and strings! (but WATCH OUT! splice only works with arrays)
	// const capArr = [];
	// str.split(' ').forEach((word) => {
	// 	const capWord = word[0].toUpperCase() + word.slice(1);
	// 	capArr.push(capWord);
	// });
	// return capArr.join(' ');
	//
	//
	//
	// const capArr = str.split(' ').map((word) => {
	// 	return word[0].toUpperCase() + word.slice(1);
	// we can also use 'concat()' above.
	// });
	// return capArr.join(' ');
	//
	// or:
	// return str
	// 	.split(' ')
	// 	.map((word) => word[0].toUpperCase() + word.slice(1))
	// 	.join(' ');
	//
	// therefore, generally speaking, we have two types of solution to this problem: iterative and with methods.
	//
	//
	//
}

module.exports = capitalize;
