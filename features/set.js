var chatRooms = new Set ();

// add
chatRooms.add('Runners');
chatRooms.add('Bikers');
chatRooms.add('Runners');

// size
console.log(chatRooms.size);

console.log(`Does set have runners: ${chatRooms.has('Runners')}`);

chatRooms.delete('Bikers');
console.log(chatRooms.size);

var movies = new Set();

function addMovie(movieTitle) {
    if(movies.has(movieTitle)) {
        console.log(`Error! ${movieTitle} already exists!`);
    } else {
        movies.add(movieTitle);
        console.log(`Success! ${movieTitle} was added!`);
    }
}

addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');