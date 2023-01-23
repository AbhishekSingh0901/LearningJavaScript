const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  printGoals(...scorers) {
    console.log(scorers);
    console.log(scorers.length);
  },
};
//task 1:
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

//task 2:
const [gk, ...fieldPlayers] = players1;
console.log(gk);

//tasks 3:
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//task 4:
const players1Final = ['thiago', 'Cuantinho', 'perisic', ...players1];
// console.log(players1Final);

//task 5:

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//task 6:
game.printGoals('Davis', 'Muller', 'Lewandowski', 'kimmich');
game.printGoals(...game.scored);

//task 7:
team1 < team2 && console.log('team 1 is more likely to win');
team1 > team2 && console.log('team 2 is more likely to win');

/*Coding Challenge #2

Let's continue with our football betting app! Keep using the 'game' variable from 
before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}

*/

//Task 1:
for (const [key, player] of game.scored.entries()) {
  console.log(`Goal ${key + 1}: ${player}`);
}

//task 2:
const odd = Object.entries(game.odds);
let count = 0;
let sum = 0;
for (const [, value] of odd) {
  sum += value;
  count++;
}

console.log(sum / count);

//task 3:
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

/*Coding Challenge #3

Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)

2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1
const values = gameEvents.values();
console.log([...values]);

const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

//4
for (let [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
