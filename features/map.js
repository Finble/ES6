var myMap = new Map();

// set
myMap.set('name', 'Andrew');

// get
console.log(myMap.get('name'));

// has
myMap.set('age', 28);
console.log(myMap.has('age')); // has prints out true, shd print out age

// delete
myMap.delete('name');

// clear

myMap.clear();

// size
console.log(myMap.size);