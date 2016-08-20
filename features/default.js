function sayHello (name = 'world') {  // name to be provided, otherwise defaul 'world' will be used
    console.log('Hello ' + name + '!');
}
                            
sayHello();
sayHello('Kate');


function greetUser (user = {name: 'Anonymous'}) { // expects user object, if not provided, sets user to name Anonymous
    console.log('Hello ' + user.name + '!');
}

greetUser();
greetUser({name: 'John'});
greetUser({name: 'Mary'});