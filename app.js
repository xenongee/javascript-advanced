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
*/

/*
	Round

console.log(
	Math.round(0.9), // 1
	Math.round(1.6), // 2
	Math.round(1.933333333), // 2
	Math.trunc(-2.75), // -2
);

console.log(
	Math.ceil(1.1), // 2
	Math.ceil(0.75), // 1
	Math.ceil(2.0001), // 3
	Math.trunc(-2.75), // -2
);

console.log(
	Math.floor(1.1), // 1
	Math.floor(0.75), // 0
	Math.floor(2.0001), // 2
	Math.floor(-2.75), // -3
);

console.log(
	// just cut the decimal part
	Math.trunc(1.1), // 1
	Math.trunc(0.75), // 0
	Math.trunc(2.0001), // 2
	Math.trunc(-2.75), // -2
);

console.log(
	(1.4999).toFixed(1), // 1.5
	Number(1.4999).toFixed(2), // 1.50
);

*/

/*
	Exercise - Random Number Function
	Упражнение - Функция случайного числа

	Imitation of rolling a dice, for example, D20 (dice from 1 to 20) for board games like "Dungeons and Dragons".
	Имитация броска игрального кубика, например, D20 (кубик от 1 до 20) для настольных игр типа "Dungeons and Dragons".

function rollDice(min, max) {
	let rolling = confirm("Roll dice?");

	if (rolling) {
		let dice = Math.floor(Math.random() * (max - min + 1) + min);
		confirm(`Your dice roll is: ${dice}.\nWould you like to roll again?`) &&
			rollDice(1, 20);
	}
}

rollDice(1, 20);
*/

/* 
	Division remainder operator
	Оператор остатка от деления

console.log(15 / 2); // 7.5
console.log(15 % 2); // 1
console.log(14 % 2); // 0

const isEven = number => number % 2 === 0;
console.log(isEven(10)); // true
console.log(isEven(11)); // false

const isOdd = number => number % 2 !== 0;
console.log(isOdd(10)); // false
console.log(isOdd(11)); // true
*/

/*
	Number divider
	Разделитель чисел

const bigNum = 69704223321;
const bigNumAlt = 69_704_223_321;

const smalNum = 25_50; 
const smalNumAlt = 25.50; 
const smalNumAlt2 = 2_5.5_0;

console.log(bigNum); // 69704223321
console.log(bigNumAlt); // 69704223321

console.log(smalNum); // 2550
console.log(Number(smalNumAlt)); // 25.5
console.log(Number.parseInt(smalNumAlt2)); // 25
console.log(Number.parseFloat(smalNumAlt2)); // 25.5
*/

/*
	BigInt

const maxNum = 2**53-1;
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(maxNum, maxNum + 1, maxNum + 2, maxNum + 3, maxNum + 4);
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// biome-ignore lint/correctness/noPrecisionLoss: <explanation>
console.log(123456789876543210123456789);
console.log(123456789876543210123456789n);
console.log(BigInt('123456789876543210123456789'));

console.log(10n + 20n);
console.log(10n * 20n);
console.log(10n / 20n); // 0n
// console.log(10n + 20); // error: cannot mix BigInt and other types
console.log(10n + BigInt(20));
console.log(123456789876543210123456789n * 123456789876543210123456789n);

console.log(10n > 20); // false
// biome-ignore lint/suspicious/noDoubleEquals: <explanation>
console.log(10n == 10); // true
console.log(10n === 10); // false
*/

/*
	Internationalization API (Intl)
	Интернационализация чисел
*/

const num = 250989.70;
const optRub = {
	style: 'currency',
	currency: 'RUB',
}
const optUsd = {
	style: 'currency',
	currency: 'USD',
}
const optDcml = {
	style: 'decimal'
}
const optPerc = {
	style: 'percent'
}
const optUnit = {
	style: 'unit',
	unit: 'celsius'
}

console.log(num);
console.log(new Intl.NumberFormat('ru-RU', optRub).format(num)); // 250 989,70 ₽
console.log(new Intl.NumberFormat('en-US', optUsd).format(num)); // $250,989.70
console.log(new Intl.NumberFormat('ru-RU', optDcml).format(num)); // 250 989,7
console.log(new Intl.NumberFormat('ru-RU', optPerc).format(0.05)); // 5%
console.log(new Intl.NumberFormat('ru-RU', optUnit).format(36.6)); // 36.6 °C
