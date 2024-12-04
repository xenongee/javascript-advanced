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
*/

const journal = function(title, employee) {
	this.title = title;
	this.employee = employee;
	this.createdAt = new Intl.DateTimeFormat('ru-RU').format(new Date());
}

const securityJournal = new journal('Security', 'John Doe', '2020-01-01');
const machineElementsJournal = new journal('Machine Elements', 'Vasya Pupkin', '2020-01-01');