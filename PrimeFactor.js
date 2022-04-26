const prompt = require("prompt-sync")();
function primeFactors(n)
{
    // Print the number of 2s that divide n
    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n/2);
    }
 
    // n must be odd at this point. So we can skip
    // one element (Note i = i +2)
    let a =0;
    let i=0;
    for (i = 3; i*i <= n/2; i = i + 2)
    {
        // While i divides n, print i and divide n
        while (n % i == 0)
        {
            console.log(i + " ");
            n = Math.floor(n/i);
            a = i;
        }
    }
 
    // This condition is to handle the case when n
    // is a prime number greater than 2
    if (n > 2)
        console.log(n + " ");
}
 
/* Driver code */
  let n=  parseInt(prompt('Enter an integer: '));
  primeFactors(n);