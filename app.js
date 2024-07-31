"use strict";

/*
    Sets

const arrSomething = ['a', 'b', 'c', 'b', 'd'];
const setSomething = new Set(arrSomething);

console.log(arrSomething);
console.log(
	setSomething,
	setSomething.size,
	setSomething.has('e'),
	setSomething.has('d'),
);
setSomething.add('e');
setSomething.add('e'); // no effect

for (const item of setSomething) {
	console.log(item);
}

console.log(setSomething, setSomething.size, setSomething.has('e'));
setSomething.delete('c');
console.log(setSomething, setSomething.size, setSomething.has('c'));

const set2arr = [...setSomething];
console.log(set2arr);

const setObj = new Set([
    { a: 1 },
    { b: 2 },
    { c: 3 },
]);
const setString = new Set('abcdf');
console.log(setObj, setString);
*/

/*
    Maps
*/

const weatherMap = new Map();

// weatherMap.set('Vyatka', '+22');
// weatherMap.set('Izhevsk', '+17');
weatherMap
	.set("Vyatka", "+22")
	.set("Izhevsk", "+17")
	.set("Nizhny Novgorod", "+21");

console.log(weatherMap);

console.log(weatherMap.get("Vyatka"));
console.log(weatherMap.get("Moscow"));

console.log(weatherMap.has("Moscow"));
console.log(weatherMap.has("Izhevsk"));

weatherMap.delete("Nizhny Novgorod");
console.log(weatherMap);

weatherMap.clear();
console.log(weatherMap);

const obj = { a: 1 };
weatherMap.set(0, 1).set(true, 'true').set(false, 'false').set([1, 2, 3], 'array').set(obj, 'object');
console.log(weatherMap, weatherMap.size);

console.log(weatherMap.get(0), weatherMap.get(true), weatherMap.get([1, 2, 3]), weatherMap.get(obj));


