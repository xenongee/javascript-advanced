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

*/	

/*
	Comparing dates
	Сравнение дат

const dateFirst = new Date(2024, 10, 30);
const dateSecond = new Date(2024, 11, 25);

console.log(dateFirst < dateSecond);
// biome-ignore lint/suspicious/noDoubleEquals: <explanation>
console.log(dateFirst == dateSecond);
console.log(dateFirst === dateSecond);

// biome-ignore lint/suspicious/noDoubleEquals: <explanation>
console.log(dateFirst.getTime() == dateSecond.getTime());
console.log(dateFirst.getTime() === dateSecond.getTime());
console.log(Number(dateFirst) === Number(dateSecond));
console.log(+dateFirst === +dateSecond); // plus operator is a shortcut for Number()
*/

/*
	Exercises - Birthday Check
	Упражнение - Проверка на день рождения


const user = {
	name: 'John',
	birthday: '1995/06/12',
};

const user2 = {
	name: 'Mike',
	birthday: '2024/11/28',
};

function isBirthday(user) {
	const today = new Date();
	const birthday = new Date(user.birthday);

	const checkMonth = today.getMonth() === birthday.getMonth();
	const checkDay = today.getDay() === birthday.getDay();

	return checkMonth && checkDay;
}

console.log(isBirthday(user));
console.log(isBirthday(user2));
*/

/*
	Internationalization API (Dates)
	Интернационализация дат


const date = new Date();

console.log(date);
console.log(new Intl.DateTimeFormat('ru-RU').format(date));

const opt = {
	hour: 'numeric',
	minute: 'numeric',
	hour12: true,
}

const opt2 = {
	hour: 'numeric',
	minute: 'numeric',
	month: 'long',
	weekday: 'short',
	year: '2-digit',
	day: 'numeric',
}

console.log(new Intl.DateTimeFormat('ru-RU', opt).format(date));

console.log(navigator.language); 

console.log(new Intl.DateTimeFormat(navigator.language, opt2).format(date));
*/

/*
	Create timer
	Создание таймера


const helloTimer = setTimeout(() => {
	console.log('Hello');
}, 1500);

const msgs = ['Hello', 'World', 'Sheeesh'];

setTimeout((msg, msgadd) => {
	console.log(msg, msgadd);
}, 2000, ...msgs);

clearTimeout(helloTimer);
*/

/*
	Timer precision
	Точность таймеров


console.log(performance.now());

setTimeout(() => {
	console.log(performance.now());
}, 1000);
*/

/*
	Working with intervals
	Работа с интервалами

// setInterval works like setTimeout, but repeats itself

const interval = setInterval(() => {
	console.log(new Date());
}, 1000)

const timer = setTimeout(() => {
	clearInterval(interval);
}, 5000);

console.log(interval, timer);
*/

/*
	Exercises - Timer
	Упражнение - Таймер
*/

// timer gets time in ms
function timer(timerInMs) {
	let timeLeft = +timerInMs;
	const formatedTimeOpt = {
		hour: "2-digit",
		minute: "numeric",
		second: "numeric",
		timeZone: "UTC"
	};
	const formatedTime = tLeft => {
		return new Intl.DateTimeFormat(navigator.language, formatedTimeOpt).format(tLeft)
	}
	console.log(`Timer starts for: ${formatedTime(timeLeft)}`);
	const timerInterval = setInterval(() => {
		timeLeft -= 1000;
		console.log(formatedTime(timeLeft));
	}, 1000);
	setTimeout(() => {
		clearInterval(timerInterval);
		console.log("Timer stopped.");
	}, timerInMs);
}

timer(5000); // 5 secs
