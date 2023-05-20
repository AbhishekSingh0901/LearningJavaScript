/**
 * Chase on the Number Line (Medium)
A painter discovered that one of his painting has been stolen. He immediately informs the police of the theft.

It is known that the policeman and thief move on the number line.

You are given that:

The initial location of the policeman on the number line is X and his speed is 2 units per second. 
The initial location of the thief on the number line is Y and his speed is 1 unit per second.

Find the minimum time (in seconds) in which the policeman can catch the thief. 
Note that, the policeman catches the thief as soon as their locations 
become equal and the thief will try to evade the policeman for as long as possible.

Example 1:
Input:
X = 0, Y = 0

Output:
0

Example 2:
Input:
X = 5, Y = 10

Output:
5

Example 3:
Input:
X = -5, Y = 10

Output:
15
 */

// const catchThief = (x, y) => {
//   let count = 0;
//   while (x < y) {
//     count++;
//     x += 2;
//     y++;
//   }
//   return count;
// };

//* Optimised Solution:
const catchThief = (x, y) => {
  const relativeSpeed = 2 - 1;
  const dist = Math.abs(y - x);
  const time = dist / relativeSpeed;
  return time;
};

console.log(catchThief(0, 0));
console.log(catchThief(5, 10));
console.log(catchThief(-5, 10));
