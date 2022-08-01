// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//PROBLEM
/*
We work for a company building a smart home thermometer, our most recent task is this: 
"Given an array of temperatures of one day, Calculate the temparature amplitude, 
keep in mind that sometimes there might be a sensor error."
*/

const temperature = [3, -2, , -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

/* 1) Understanding the question:
    - what is temp amplitude: Answer?: Diff bw highest and lowest temp.
    - How to compute min and max temp form array?:
    - Whats a sensor error? and what to do when it occurs?
    
   2) Breaking Problem into sub problems 
    -How to ignore errors?
    -find max and min value
    -sub min from max and return.
    
*/

const calcAmplitude = function (temparatures) {
  let max = temparatures[0];
  let min = temparatures[0];

  for (let i = 0; i < temparatures.length; i++) {
    const curTemp = temparatures[i];

    if (typeof curTemp !== "number") continue; //continue statement will move loop to the next iteration.

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcAmplitude(temperature);
const amp = calcAmplitude(temperature);
console.log(amp);

//PROBLEM 2: Function should now recive 2 arrays of temps
/* 

1) Understanding the problem
  -With 2 arrays, should we impliment the same functionality twice?
   No just merge the two aryays.

2) Breaking into sub-problems
  -Merge two arrays.
*/

const calcAmplitudeNew = function (temp1, temp2) {
  let temparatures = temp1.concat(temp2);

  let max = temparatures[0];
  let min = temparatures[0];

  for (let i = 0; i < temparatures.length; i++) {
    const curTemp = temparatures[i];

    if (typeof curTemp !== "number") continue; //continue statement will move loop to the next iteration.

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcAmplitude(temperature);
const amp2 = calcAmplitudeNew(temperature, [4, 5, 6, 7, 46]);
console.log(amp2);
