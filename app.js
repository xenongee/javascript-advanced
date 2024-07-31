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
*/

/*
	Quick Map creation

const weatherMap = new Map([
	["Vyatka", "+22"],
	["Izhevsk", "+17"],
	["Nizhny Novgorod", "+21"],
]);

console.log(weatherMap);

const obj = {
	vyatka: 22,
	izhevsk: 17,
	nizhnyNovgorod: 21,
	moscow: 19,
	saintPetersburg: 19,
	samara: 26,
	volgograd: 27
};
const weatherMapLarge = new Map(Object.entries(obj));

console.log(Object.entries(obj));
console.log(weatherMapLarge);
*/

/*
	Map iteration
const weatherMap = new Map([
	["vyatka", 22],
	["izhevsk", 17],
	["nizhnyNovgorod", 21],
	["moscow", 19],
	["saintPetersburg", 19],
	["samara", 26],
	["volgograd", 27],
]);

for(const [key, value] of weatherMap) {
	console.log(key, value);
}

console.log([...weatherMap]); // array
console.log([...weatherMap.keys()]);
console.log([...weatherMap.values()]);
*/

/*
	Exercise - swap keys and values
let weatherMap = new Map([
	["vyatka", 22],
	["izhevsk", 17],
	["nizhnyNovgorod", 21],
	["moscow", 19],
	["saintPetersburg", 19],
	["samara", 26],
	["volgograd", 27],
]);

const weatherMapInverted = new Map();
for (const [key, value] of weatherMap) {
	weatherMapInverted.set(value, key);
}

console.log(weatherMapInverted);

//or

weatherMap = new Map([...weatherMap].map(el => el.reverse()));
console.log(weatherMap);
*/

/*
	WeakMap
*/

const newMap = new WeakMap();

let a = { a: "one" };
let b = { b: "two" };

// Keys only objects: unlike Map, where a key can be any data type, WeakMap accepts only objects as keys.
// Ключи только объекты: в отличие от Map, где ключом может быть любой тип данных, WeakMap принимает только объекты в качестве ключей.
newMap.set(a, "object 1");
newMap.set(b, "object 2");

console.log(newMap.get(a), newMap);
console.log(newMap.has(b));
// console.log(newMap.delete(a));

console.log(newMap);

// Auto-cleaning: the key-value is automatically removed from WeakMap as soon as the key-object is no longer referenced (garbage collection).
// Автоочистка: ключ-значение автоматически удаляется из WeakMap, как только на объект-ключ нет больше ссылок (сборка мусора).
a = null;
// console.log(newMap); // 'a' contained in WeakMap
setTimeout(() => console.log(newMap), 1000); // 'a' not contained in WeakMap

let cache = new WeakMap();

function getValue(object) {
	if (!cache.has(object)) {
		let something = Math.random();
		cache.set(object, something);
	}
	return cache.get(object);
}

console.log(getValue(b));
console.log(getValue(b));
