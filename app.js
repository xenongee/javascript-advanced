/*
    Abstraction and encapsulation

    Highlighting key characteristics of the object - abstraction
    Выделение ключевых характеристик объекта

    Ability of a class to hide its properties and methods from outside world, allowing access to them only through certain methods - encapsulation
    Способность класса скрывать свои свойства и методы от внешнего мира, предоставляя доступ к ним только через определенные методы

    Properties are private, access to them only through methods - getters and setters
    Свойства приватные, доступ к ним только через методы - геттеры и сеттеры
*/

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
