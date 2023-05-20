/**
 * Jack's Prime Number Dilemma
Easy
Once upon a time, there was a young programmer named Jack. Jack had a passion for coding and always looked for new challenges. 
One day, his teacher gave him the assignment to write a JavaScript program to find out whether a given number was a prime number or not. 
Jack knew that a prime number is a number that is divisible only by one and itself.

He started by creating an empty JavaScript function and then 
wrote a program that would check if the given number is divisible by any other number except one and itself.

Help Jack complete this work given by his teacher.

Example 1:
Input:
5

Output:
true

Explanation:
5 is a prime number

Example 2:
Input:
10

Output:
false

Explanation:
10 is not a prime number
*/

const isPrime = n => {
  for (let i = 2; i < Math.abs(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
    else return true;
  }
};
