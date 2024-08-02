"use strict";

/*
    Conversion and verification of numbers

console.log(10 === 10.0); // true

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004

console.log(0.2 + 0.2 === 0.4); // true
console.log(0.2 + 0.2); // 0.4

console.log(
	Number("10"), // 10
	+"10" // 10 (implicit conversion)
); // 10, 10

console.log(
	Number.parseInt("10"), // 10
	Number.parseInt("10", 10), // 10
	Number.parseInt("180 degrees"), // 180
	Number.parseInt("degrees 180"), // NaN
	Number.parseInt("0x12", 16), // 18
	Number.parseInt("624", 8), // 404
	Number.parseInt("111110110", 2), // 502
);

console.log(
	// 0x - hex (16), 0o - octal (8), 0b - binary (2)
	0x12, // 18
	0o624, // 404
	0b111110110, // 502
);

console.log(Number.parseInt("36.6")); // 36
console.log(Number.parseFloat("36.6")); // 36.6

console.log(
	Number.isNaN(Number("12abc")), // true
	10 / 0,  // Infinity
	Number.isNaN(10 / 0), // false
	Number.isFinite(10 / 0), // false
	Number.isFinite(Number("12abc")), // false
	Number.isFinite(10), // true
	Number.isInteger(10), // true
	Number.isInteger(10.5), // false
);
*/

/*
	Math library
*/

console.log(
	Math.E, 
	Math.PI, 
	Math.LN2, 
	Math.LN10, 
	Math.LOG2E, 
	Math.LOG10E,
	Math.SQRT1_2,
	Math.SQRT2,
);

console.log(
	Math.pow(3, 2),  // 9
	3 ** 2,  // 9
);
console.log(
	Math.pow(3, 3), // 27
	3 ** 3, // 27
);

console.log(
	Math.sqrt(9), // 3
	9 ** (1/2) // 3
);
console.log(
	Math.cbrt(27), // 3
	27 ** (1/3) // 3
);

console.log(
	// returns 1 for positive numbers and -1 for negative numbers
	Math.sign(-100), // -1
	Math.sign(55) // 1
);
console.log(
	// returns number to its absolute value (modulus)
	Math.abs(-100), // 100
	Math.abs(-55) // 55
);

console.log(
	Math.min(1, 2, 3), // 1
	Math.max(1, 2, 3), // 3
);

console.log(Math.random()); // random number [0, 1]
