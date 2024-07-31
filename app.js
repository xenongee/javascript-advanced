"use strict";

const arrSomething = ["a", "b", "c", "b", "d"];
const setSomething = new Set(arrSomething);

console.log(arrSomething);
console.log(
	setSomething,
	setSomething.size,
	setSomething.has("e"),
	setSomething.has("d"),
);
setSomething.add("e");
setSomething.add("e"); // no effect

for (const item of setSomething) {
	console.log(item);
}

console.log(setSomething, setSomething.size, setSomething.has("e"));
setSomething.delete("c");
console.log(setSomething, setSomething.size, setSomething.has("c"));

const set2arr = [...setSomething];
console.log(set2arr);

const setObj = new Set([
    { a: 1 },
    { b: 2 },
    { c: 3 },
]);
const setString = new Set('abcdf');
console.log(setObj, setString);