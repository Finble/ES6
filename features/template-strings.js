// string interpolation using ${xx} AND backticks ``

function greet (name = 'Andrew') {
    console.log('Hello ' + name + '!');
    console.log(`Hello ${name}!`);  // string interpolation vs concatonation using ${xxx}
}

greet();
greet('Kate');

console.log(`1 + 6 = ${1+6}`);

// line format usingn backticks ``, means do not need to use \n

console.log(`Hey,

This kindof looks like an email!

 - Andrew
`);

var person = {
    name: 'Andrew',
    age: 35
};

// set default outside of function to make function code easier to read

var defaultPerson = {
    name: 'Anonymous',
    age: 0
};

function welcomePerson (person=defaultPerson) {
    console.log(`Hello ${person.name}! You are ${person.age}.`);
    
};

welcomePerson();
welcomePerson(person);