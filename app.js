/*
    Abstraction and encapsulation

    Highlighting key characteristics of the object - abstraction
    Выделение ключевых характеристик объекта

    Ability of a class to hide its properties and methods from outside world, allowing access to them only through certain methods - encapsulation
    Способность класса скрывать свои свойства и методы от внешнего мира, предоставляя доступ к ним только через определенные методы

    Properties are private, access to them only through methods - getters and setters
    Свойства приватные, доступ к ним только через методы - геттеры и сеттеры

class Film {
    #title;
    #year;
    #director;
    rating;

    constructor(title, year, director) {
        this.#title = title;
        this.#year = year;
        this.#director = director;
    }

    get title() {
        return this.#title + " (" + this.#year + ")";
    }

    get director() {
        return this.#director;
    }

    set ratings(rate) {
        this.rating = rate;
    }

    get ratings() {
        if (this.rating === undefined) {
            return "No rating";
        }
        return "Rating: " + this.rating;
    }
}

const someFilm = new Film("Some Film", 2020, "Some Director");
console.log(someFilm);
console.log(someFilm.title);
console.log(someFilm.director);
console.log(someFilm.ratings);
someFilm.ratings = 5
console.log(someFilm.ratings);

*/

/*
    Old way inheritance

const Book = function (title, author) {
    this.title = title;
    this.author = author;
}

Book.prototype.buy = function () {
    return `You bought ${this.title}`;
}

const AudioBook = function (title, author, length) {
    // this.title = title;
    // this.author = author;
    Book.call(this, title, author);
    this.length = length;
}

AudioBook.prototype = Object.create(Book.prototype);
// +
AudioBook.prototype.constructor = AudioBook;

AudioBook.prototype.bookLength = function () {
    return `Audio book length is ${this.length} minutes`;
}

const someBook = new Book("Some Book", "Some Author");
console.log(someBook);
console.log(someBook.buy());

const someAudioBook = new AudioBook("Some Audio Book", "Some Author", 120);
console.log(someAudioBook);
console.log(someAudioBook.buy()); // if we want to use the 'buy' method for AudioBook, we need to link the prototypes through Object.create
console.log(AudioBook.prototype.constructor); // remember, we need to link constructor to the prototype
console.log(someAudioBook.bookLength());

console.log(someAudioBook instanceof AudioBook);
console.log(someAudioBook instanceof Book);
*/

/*
    Inheritance ES6

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    buy() {
        return `You bought ${this.title}`;
    }
}

class AudioBook extends Book {
    constructor(title, author, length) {
        super(title, author); // we need to call super() to call constructor of parent class -> Book
        this.length = length;
    }

    bookLength() {
        return `Audio book length is ${this.length} minutes`;
    }
}

const someBookClass = new Book("Some Book", "Some Author");
console.log(someBookClass);
console.log(someBookClass.buy());

const someAudioBookClass = new AudioBook("Some Audio Book", "Some Author", 120);
console.log(someAudioBookClass);
console.log(someAudioBookClass.buy());
console.log(someAudioBookClass.bookLength());

console.log(someAudioBookClass instanceof AudioBook);
console.log(someAudioBookClass instanceof Book);
*/

/*
    Method overriding

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    info() {
        return `Book ${this.title} by ${this.author}`;
    }
}

const bookOne = new Book("Book One", "Author One");

class eBook extends Book {
    constructor(title, author, fileFormat) {
        super(title, author);
        this.fileFormat = fileFormat;
    }

    info() {
        return `eBook ${this.title} by ${this.author} on ${this.fileFormat}`;
    }
}

const bookTwo = new eBook("Book Two", "Author Two", "djvu");

console.log(bookOne.info());
console.log(bookTwo.info());
*/

/*
    Exercise - Game
    Enemy class
        health - property, private
        getDamage - method
    SuperEnemy class extends Enemy class
        getDamage - overrideded method, take damage 50% of the time
    Weaapon class
        damagePower - property
        attack - method
*/

class Enemy {
    #health;

    constructor(name, health) {
        this.name = name;
        this.#health = health;
    }

    checkHealth() {
        if (this.#health <= 0) {
            console.log(`💀 ${this.name} is dead!`);
            return true;
        }
        return false;
    }

    getDamage(damagePower) {
        this.#health -= damagePower;
        this.checkHealth();
    }

    get health() {
        if (this.#health < 0) {
            return 0;
        }
        return this.#health;
    }
}

class SuperEnemy extends Enemy {
    constructor(name, health) {
        super(name, health);
    }

    getDamage(damagePower) {
        if (Math.random() < 0.5) {
            super.getDamage(damagePower);
        } else {
            console.log("❌ Missed!");
        }
        this.checkHealth();
    }
}

class Weapon {
    constructor(damagePower) {
        this.damagePower = damagePower;
    }
    attack(enemy) {
        if (enemy.checkHealth()) return;
        console.log(`🔫 Attack: ${this.damagePower} damage to ${enemy.name}`);
        enemy.getDamage(this.damagePower);
    }
}

const boo = new Enemy("👻 Boo", 100);
const boss = new SuperEnemy("😈 Boss", 50);
const gun = new Weapon(15);

console.log(`⚠️ Status: ${boo.name} - ${boo.health} hp`);
console.log(`⚠️ Status: ${boss.name} - ${boss.health} hp`);

gun.attack(boo);
gun.attack(boo);
gun.attack(boo);
gun.attack(boo);
gun.attack(boo);
gun.attack(boo);
gun.attack(boo); // dead

gun.attack(boss);
gun.attack(boss);
gun.attack(boss);
gun.attack(boss);

console.log(`⚠️ Status: ${boo.name} - ${boo.health} hp`);
console.log(`⚠️ Status: ${boss.name} - ${boss.health} hp`);
