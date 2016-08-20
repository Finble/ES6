// old way

var age = 25;

function printHello() {
    console.log("Hello");
}

var person = {
    name: 'Andrew',
    age: age,
    printHello: printHello()
};

console.log(person.age);


// es6 way

var age = 25;

var person = {
    name: 'Andrew',
    age, // auto sets to age
    printHello // auto sets to function
};

console.log(person.age);