let name = 'Andrew';

console.log(name);

// var available anywhere inside a function, including in/out of an if statement

var x = 0;

if (true) {
    var x = 12;  // or just x
    console.log(x);
}

console.log(x);

// 12
// 12


// let ONLY available within the block

var x = 0;

if (true) {
    let x = 14;  
    console.log(x);
}

console.log(x);

// 14
// 0


// for loop, using es6 `${}`

for(var i = 0; i < 3; i++) {
    console.log(`For loop: i =${i}`);
}

console.log(i);


// for loop, using es6 let

for(let i = 0; i < 3; i++) {
    console.log(`For loop: i =${i}`);
}

console.log(i); // crashes code as can only use i within loop when using let


// can access let value anywhere within function, but not outside of block

function genCallback() {
    
    let name = 'Sarah'
    
    return function () {
        console.log(`Hello ${name}`);
    }
}

genCallback()();


// var works inside functions or globally, if positioned outside of function
// let works inside functions only, to run code outside of function using let, will not work