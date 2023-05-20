/**
 * Treasure Quest
Easy
You have been tasked with helping a group of adventurers on a quest to retrieve a treasure. 
In order to reach the treasure, the adventurers must cross a treacherous mountain pass. 
They have to carry all their supplies with them, including food and water. 
They have a list of all the supplies they need to bring, along with the weight of each item in arr array.

Your task is to help the adventurers calculate the total weight of all their supplies. 
They have asked you to write a JavaScript program that will take an array of integers representing the weight of each item, 
and return the sum of all the weights using recursion.

Example 1:
Input:
arr = [10, 20, 30, 40]

Output:
100

Explanation:
Sum of all the elements of the array is 100.

Example 2:
Input:
arr = [70, 27, 40, 14]

Output:
151
*/

const sumArray = arr => {
  if (arr.length === 1) return arr[0];
  let count = arr[arr.length - 1] + sumArray(arr.slice(0, -1));
  return count;
};

console.log(sumArray([10, 20, 30, 40]));
