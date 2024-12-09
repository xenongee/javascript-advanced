/*
    Javascript OOP

const someObj = [1, 2, 3];
console.dir(someObj); // object have prototype with methods
*/

/*
    Operator 'new'

const User = function(email, passwd) {
    this.email = email;
    let passwdhash = new String();
    for (i = 0; i < passwd.length; i++) {
        passwdhash += passwd[i] + (passwd.charCodeAt(i) * i);
    }
    this.passwd = passwdhash;
}

const UserNew = new User('email@lol.com', 'password123');
const UserNewSecond = new User('email@kek.org', 'qwerty321');

console.log(UserNew, UserNewSecond);

console.log(UserNew instanceof User);
*/

/*
    Prototype

const journal = function(title, employee) {
	this.title = title;
	this.employee = employee;
	this.createdAt = new Intl.DateTimeFormat('ru-RU').format(new Date());
    this.readed = false;
}

journal.prototype.read = function() {
    this.readed = true;
}

const securityJournal = new journal('Security', 'John Doe', '2020-01-01');
const machineElementsJournal = new journal('Machine Elements', 'Vasya Pupkin', '2020-01-01');

console.log(securityJournal.title, securityJournal, machineElementsJournal.title, machineElementsJournal);

securityJournal.read();
machineElementsJournal.read();

console.log(securityJournal.title, securityJournal);
console.log(machineElementsJournal.title, machineElementsJournal);
// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
console.log('hasOwnProperty(editedAt):', machineElementsJournal.hasOwnProperty('editedAt')); // false
// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
console.log('hasOwnProperty(employee):', machineElementsJournal.hasOwnProperty('employee')); // true

console.log(securityJournal.__proto__); // {read: f}

console.log('proto?', machineElementsJournal.__proto__ === journal.prototype); // true
// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
console.log('proto?',journal.prototype.isPrototypeOf(securityJournal)); // true
// biome-ignore lint/suspicious/noPrototypeBuiltins: <explanation>
console.log('proto?',journal.prototype.isPrototypeOf(journal)); // false

// some example
// bad practice
Array.prototype.firstElem = () => {
    console.log('first element: ', [0]);
};

console.log([1,2,3].firstElem());

*/

/*
    Exercise - Shopping Cart

const products = [
    { id: 1, name: "Egg" },
    { id: 2, name: "Milk" },
    { id: 3, name: "Potatoes" }
];

const productByName = (name) => {
    const product = products.find(item => item.name === name);
    if (product === undefined) {
        return undefined;
    }
    return product;
};

const Cart = function() {
    this.productsInCart = [];
};

Cart.prototype.addProduct = function(product) {
    if (product === undefined) {
        console.log('🔴 product is undefined') ;
        return;
    }

    if (typeof product === "string") {
        product = productByName(product);
    }

    const index = this.productsInCart.findIndex(item => item.id === product.id);
    if (index !== -1) {
        console.log(`🔴 product '${product.name}' already added`);
        return;
    }
    product.count = 1;
    this.productsInCart.push(product);
    console.log(`🟢 product '${product.name}' added`);
}

Cart.prototype.changeCount = function(product, action) {
    if (product === undefined) {
        console.log('🔴 product is undefined') ;
        return;
    }

    if (typeof product === "string") {
        product = productByName(product);
    }

    const index = this.productsInCart.findIndex(item => item.id === product.id);
    if (index === -1) {
        console.log(`🔴 product '${product.name}' not found`);
        return;
    }

    switch (action) {
        case "increase":
            this.productsInCart[index].count++;
            console.log(`🟢 product '${product.name}' count increased (count: ${this.productsInCart[index].count})`);

            break;
            case "decrease":
                this.productsInCart[index].count--;
                console.log(`🟢 product '${product.name}' count decreased (count: ${this.productsInCart[index].count})`);
                if (this.productsInCart[index].count === 0) {
                    this.productsInCart.splice(index, 1);
                }
            break;

        default:
            console.log(`🔴 unknown action '${action}', need 'increase' or 'decrease'`);
            break;
    }
}

const myCart = new Cart();

myCart.addProduct(products[4]);
myCart.addProduct("Egg");
myCart.addProduct("Egg");
myCart.addProduct(products[2]);

myCart.changeCount(products[0]);
myCart.changeCount("Egg", "increase");
myCart.changeCount(products[0], "decrease");
myCart.addProduct(products[1]);
myCart.changeCount(products[1], "decrease");
myCart.addProduct(products[1]);
myCart.changeCount(products[4], "decrease");

console.log(myCart);

*/

/*
    Classes

class JournalClass {
    // this code always works in strict mode
    readed = false;
    createdAt = new Intl.DateTimeFormat('ru-RU').format(new Date());
    constructor(title, employee) {
        this.title = title;
        this.employee = employee;
    }

    read() {
        this.readed = true;
    }
}

const securityJournalClass = new JournalClass('Security', 'John Doe');
const machineElementsJournalClass = new JournalClass('Machine Elements', 'Vasya Pupkin');

console.log(securityJournalClass.title, securityJournalClass);
machineElementsJournalClass.read();
console.log(machineElementsJournalClass.title, machineElementsJournalClass);
console.log(machineElementsJournalClass.__proto__);
console.log(machineElementsJournalClass instanceof JournalClass);
*/

/*
    Setters and Getters

const task = {
    title: 'someTask',
    completionTime: new Date("01.01.2024"),

    // isOvertimed() {
    get isOvertimed() {
        return new Date() > this.completionTime;
    },

    set isOvertimed(value) {
        if (!value) {
            this.completionTime = new Date();
        }
    }
}

// console.log(task.isOvertimed());
// console.log(task, task.isOvertimed);
// task.isOvertimed = false
// console.log(task, task.isOvertimed);

class TaskClass {
    constructor(title, date) {
        this.title = title;
        this.setDate = date;
    }

    get isOverdated() {
        if (this._setDate) {
            return `_Overdated: ${new Date() > this._setDate}`;
        }
        return `Overdated: ${new Date() > this.setDate}`;
    }

    set setDate(date) {
        if(new Date() > date) {
            console.log('🔴 date is over');
            return;
        }
        this._setDate = date;
    }
}

const newTask = new TaskClass('anyTask', new Date("2024.12.10"));
console.log(newTask, newTask.isOverdated);
newTask.setDate = new Date("2024.12.05");
console.log(newTask, newTask.isOverdated);
newTask.setDate = new Date("2024.12.15");
console.log(newTask, newTask.isOverdated);
*/

/*
    Static

// Number.MAX_SAFE_INTEGER; // Static property of Number class
// new Number(); // Instance of Number class

// Array.from([1,2,3]); // Static method of Array class
// new Array(); // Instance of Array class

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class SomeClass {
    // helloWorld() {
    //     console.log('Hello World!');
    // }

    static helloWorld() {
        console.log('Hello World!');
    }

    static var1 = 5;

    static {
        let var2 = 10;
        this.var1 *= var2;
    }
}

// const someInstance = new SomeClass();
// someInstance.helloWorld();

SomeClass.helloWorld();
console.log(SomeClass.var1);

// how it works:
// const someObj = function() { ... };

// someObj.helloWorld = function() {
//     console.log('Hello World!!!');
// }

// someObj.helloWorld();
*/

/*
    Private methods and properties

class Car {
    #vin = '12345432109876';

    #changeVin(vin) {
        this.#vin = vin;
        console.log("🟢 vin changed");
    }

    someMethod() {
        this.#changeVin('67890123454321');
    }

    static #fuelTypes = ['petrol', 'diesel'];
    static {
        this.#fuelTypes = ['petrol', 'diesel', 'electric', 'hybrid'];
        console.log(this.#fuelTypes);
    }
}

const automobile = new Car();
// automobile.#vin = '12345678901234567'; // error
console.log(automobile);
automobile.someMethod();
console.log(automobile);
*/

/*
    Exercise - User class

class User {
    #login;
    #password;

    constructor(login, password) {
        this.#login = login;
        // NOT = this.#setPassword(password);
        this.#accessPassword = password;
    }

    get accessLogin() {
        return this.#login;
    }

    set #accessPassword(value) {
        this.#password = this.#stringReverse(value);
    }

    get #accessPassword() {
        return this.#stringReverse(this.#password);
    }

    #stringReverse(value) {
        return value.split('').reverse().join('');
    }

    checkPassword(password) {
        const check = this.#accessPassword === password; // get
        console.log('🟡 Password checked: ', check);
        return check;
    }

    changePassword(oldPasswd, newPasswd) {
        if (this.checkPassword(oldPasswd)) {
            this.#accessPassword = newPasswd; // get
            console.log('🟢 Password changed');
            return true;
        }
        return false;
    }
}

const userAdmin = new User('admin', 'password123');
console.log(userAdmin.accessLogin);
console.log(userAdmin);
userAdmin.checkPassword('password123');
userAdmin.changePassword('password123', 'Pass_Word321')
console.log(userAdmin);
*/
