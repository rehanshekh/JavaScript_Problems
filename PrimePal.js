// program to check if a number is prime or not
const prompt = require("prompt-sync")();

let number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

function PrimeCheck(n)
{
if (n === 1) {
    console.log("1 is neither prime nor composite number.");
}


else if (n > 1) {


    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is a not prime number`);
    }
}


else {
    console.log("The number is not a prime number.");
}
}

		var rem, temp, final = 0;
		temp = number;
		while(number>0)
		{
			rem = number%10;
			number = parseInt(number/10);
			final = final*10+rem;
		}
		if(final==temp)
		{
			console.log("The inputed number is Palindrome");
            PrimeCheck(temp);
		}
		else
		{
			console.log("The inputted number is not palindrome");
		}
