const prompt = require("prompt-sync")();
function sum(n)
{
let i, s = 0.0;
for(i = 1; i <= n; i++)
    s = s + 1 / i;
         
return s;
}
 
// Driver code
const n = (prompt('Enter a number:'));
console.log("Sum is " + sum(n));