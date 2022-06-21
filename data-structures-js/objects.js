// even though we don't use quotes on the key names, we usually use strings (if we don't use a number or a symbol). js allows us to ommit the quotes for convenience:

const person = {
	name: 'Jose',
	age: 26,
	greet() {
		console.log('Hi, I am ' + this.name);
	},
};
// the above is the same as the following:
// const person1 = { 'name': 'Jose', 'age': 26 };
console.log(person.name);
// the above is the same as the following:
console.log(person['name']);

// you can add properties:
person.lastName = 'Boix';
console.log(person.lastName);

// you can also delete properties with the 'delete' operator:
delete person.age;
console.log(person);

console.log(person.greet());
