const prompt = require("prompt-sync")();
function primeFactors(n)
{

    while (n % 2 == 0)
    {
        console.log(2 + " ");
        n = Math.floor(n/2);
    }
 
    let a =0;
    let i=0;
    for (i = 3; i*i <= n/2; i = i + 2)
    {
        while (n % i == 0)
        {
            console.log(i + " ");
            n = Math.floor(n/i);
            a = i;
        }
    }
 
    if (n > 2)
        console.log(n + " ");
}
 
/* Driver code */
  let n=  parseInt(prompt('Enter an integer: '));
  primeFactors(n);