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
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
// 1. Create one player array for each team
const [players1, players2] = game.players;

console.log(players1); // Players of Bayern Munich
console.log(players2); // Players of Borrussia Dortmund

// 2. Goalkeeper and field players for team 1 (Bayern Munich)
const [gk, ...fieldPlayers] = players1;

console.log(gk); // 'Neuer'
console.log(fieldPlayers); // Array of 10 field players

// 3. Create an array 'allPlayers' containing all players of both teams
const allPlayers = [...players1, ...players2];

console.log(allPlayers); // Array of 22 players

// 4. Create a new array 'players1Final' with substitute players
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final); // Original team 1 players + 3 substitutes

// 5. Create variables for each odd
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2); // 1.33, 3.25, 6.5

// 6. Function to print goals and number of goals scored
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
  for (const player of players) {
    console.log(player);
  }
};

// Test with specific players
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// Test with players from game.scored
printGoals(...game.scored);

// 7. Print the team more likely to win based on odds
const likelyWinner = team1 < team2 ? game.team1 : game.team2;
console.log(`${likelyWinner} is more likely to win.`);
