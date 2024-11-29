"use strict";

/*
	Creating dates
    Создание дат

const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(now);
console.log(`${day}.${month}.${year} ${hours}:${minutes}:${seconds}`);

console.log(new Date('01.01.1999'));
console.log(new Date('1999-01-01'));
console.log(new Date('1996 june 9'));
console.log(new Date(1996, 5, 9)); // month starts from 0
console.log(new Date(1996, 5, 1258));

console.log(Date.now()); // unux datestamp
console.log(new Date(now.setFullYear(2033))); // change year
*/

/*
	Operations with dates
	Операции с датами
*/

const date1 = new Date(2024, 10, 30);
const date2 = new Date(2024, 11, 25);

console.log(Number(date1), Number(date2));
console.log(date2 - date1);

function getDaysBetweenDates(datefirst, datesecond) {
	return (date2 - date1) / (1000 * 60 * 60 * 24);
}

console.log(getDaysBetweenDates(date1, date2));

console.log(date1);
console.log(+date1); 
console.log(date.setTime(date1.getTime() + 1000 * 60 * 60 * 24)); // add 1 day
console.log(new Date(date2.setDate(date.getDate() + 1))); // add 1 day

	

