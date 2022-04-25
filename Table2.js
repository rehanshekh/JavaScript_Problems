// program to generate a multiplication table
const prompt = require("prompt-sync")();
// take input from the user
const number = parseInt(prompt('Enter an integer: '));

//creating a multiplication table
for(let i = 1; i <= number; i++) {

    // multiply i with number
    const result = i * 2;

    // display the result
    console.log(`${2} * ${i} = ${result}`);
}