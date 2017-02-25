//Array of players to be separated into matchups
var players = ['A', 'B', 'C', 'D', 'E', 'F'];

var allMatchups = [];

var totalMatches = (players.length / 2);

for (var i =0; i < totalMatches; i++) {
  var currentMatchup = [];
  currentMatchup.push(players.shift());
  
  var randomIndex = Math.floor(Math.random() * players.length);
  currentMatchup.push(players.splice(randomIndex, 1));

  allMatchups.push(currentMatchup);
}

console.log(allMatchups);