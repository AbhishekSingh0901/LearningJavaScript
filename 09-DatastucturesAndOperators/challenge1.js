const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
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
const players1Final = ["thiago", "Cuantinho", "perisic", ...players1];
// console.log(players1Final);

//task 5:

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//task 6:
game.printGoals("Davis", "Muller", "Lewandowski", "kimmich");
game.printGoals(...game.scored);

//task 7:
team1 < team2 && console.log("team 1 is more likely to win");
team1 > team2 && console.log("team 2 is more likely to win");
