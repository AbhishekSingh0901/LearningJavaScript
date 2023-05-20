/**
 * Climbing Stairs (Easy)
You are an adventurer and you have come across a tall staircase with n steps to reach the top. 
You decide to take on the challenge and start climbing the stairs. 
You quickly realize that there are two ways to climb each step: either take 1 step at a time, or take 2 steps at once.
Can you figure out how many different ways you can climb to the top?

Example 1:
Input:
n = 2

Output:
2

Explanation:
There are two ways to climb to the top.

1 step + 1 step
2 steps
Example 2:
Input:
n = 3

Output:
3

Explanation:
There are three ways to climb to the top.

1 step + 1 step + 1 step
1 step + 2 steps
2 steps + 1 step
 */

const climbStairs = n => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};

console.log(climbStairs(6));
