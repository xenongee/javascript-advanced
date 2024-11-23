"use strict";

/*
	Creating dates
    Создание дат
*/

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
