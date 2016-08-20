const PORT = 3000;  // value cannot be changed, nor can name be reused as var PORT

console.log(PORT);

console.log(PORT + 1);

const CONFIG = {
    PORT: 3000
}

console.log(CONFIG);
CONFIG.PORT = 3001
console.log(CONFIG);