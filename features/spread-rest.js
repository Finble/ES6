// pre es6

//function add (a, b) {
//    return a + b;
//}
//
//console.log(add(1, 4));
//
//// using spread operator, ... (3 dots) to come before an array or name of an array, can easily create a new array
//
//var numbers = [4, 22];
//
//console.log(add(...numbers));
//
//var groupA = [33, 99];
//var groupB = [11];
//var unified = [0, groupA, groupB, 100];
//
//console.log(unified);  //[ 0, [ 33, 99 ], [ 11 ], 100 ]
//
//var unified = [0, ...groupA, ...groupB, 100];
//
//console.log(unified);  // [ 0, 33, 99, 11, 100 ]


//  without rest params - lists each name into an array
//
//function greetUsers (names) {
//    names.forEach(function(name) {
//        console.log('Hello ' + name);
//    });
//}
//
//greetUsers(['andrew', ' mike', ' jen']);
//
//
//// with rest params, use inside function definition ...names, takes 3 separate arguments and puts names into an array
//
//function greetUsers (...names) {
//    names.forEach(function(name) {
//        console.log('Hello ' + name);
//    });
//}
//
//greetUsers('andrew', 'mike', 'jen');

// with rest params, can add name of array

function greetUsers (group, ...names) {
    names.forEach(function(name) {
        console.log(`Hello ${name}.  You are part of ${group}`);
    });
}

greetUsers('Developers', 'andrew', 'mike', 'jen');

// adder(3, 5, 7, 1)

function adder (base, ...numbers) {
    numbers.forEach(function(number) {
        console.log(base + number);
    });
}

adder(3, 5, 7, 1);