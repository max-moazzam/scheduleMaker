//Function inputs an array of players and a # of weeks and returns randomly created matchups 
//so that no player plays each other more than once until theyve played everyone else at least once
	//Potential option for making Home/Away count

//Enter an array and amount of weeks

var enteredArray = ['Ann', 'Ben', 'Cam', 'Dan'];
var amountOfWeeks = 10;

//Creates an array of objects each containing a particular player and a pool of players to matchup with
var playerPools = createPools(enteredArray);

for (var jj = 0; jj <= amountOfWeeks; jj++) {

	//Randomize Array, set equal to currentWeekArray
	var currentWeekArray = randomizeArray(createArray(enteredArray));

	var allMatchups = [];
	while (currentWeekArray.length > 0) {
		//Select the first option of currentWeekArray, (player1)
		var currentMatchup = [];
		currentMatchup.push(currentWeekArray.shift());

		//Select the corresponding currentOptionPool (player1currentOptionPool)
		var currentOptionPool = poolSelector(currentMatchup[0], playerPools);

		if (currentOptionPool.length === 0) {
			currentOptionPool = rebuildPool(currentMatchup[0], enteredArray);
		}

		//Randomly match player1 with someone from player1currentOptionPool (player2)
		currentOptionPool = randomizeArray(currentOptionPool);
		currentMatchup.push(currentOptionPool.shift()); 		//Also cuts out player 2 from player1's pool
		allMatchups.push(currentMatchup);

		//Cut out player1 from player2currentOptionPool (set as option so home/away 1 for each is possible)
		var playerToCut = currentMatchup[0];
		var poolToCutFrom = poolSelector(currentMatchup[1], playerPools);
		poolToCutFrom.splice(poolToCutFrom.indexOf(playerToCut, 1);

		//Cut out Player2 from currentWeekArray
		currentWeekArray.splice(currentWeekArray.indexOf(currentMatchup[1], 1);
	} 
}


//Helper functions

function randomizeArray(array) {
	var toShuffle = array.length - 1;
	var randomIndex;
	var temp;

	//While there are still elements left to shuffle
	while(toShuffle) {
		//Pick a random element out of all the elements remaining to be shuffled
		randomIndex = Math.floor(Math.random() * toShuffle);
		
		//Swap that random element with the currently selected spot at the end of the array
		temp = array[toShuffle];
		array[toShuffle] = array[randomIndex];
		array[randomIndex] = temp;

		//Since an element has been shuffled, reduce the amount toShuffle by 1
		toShuffle--;
	}

return array;
}

function createArray(array) {
	var newArray = [];
	for (var i = 0; i < array.length; i++) {
		newArray.push(array[i]);
	}

return newArray;
}

//Function takes in an array and outputs an array of objects containing a name property of an individual element and a pool property of every other element
function createPools(array) {
	//Declare output array
	var allPlayers = [];

	//Declares a player object to be added to the overall array, containing a name property and a pool property
	//Name property represents a single element
	//Pool property loops through the array and puts all other elements not assigned to the name property into an array
	for (var i = 0; i < array.length; i++) {
  		var player = {};
		player.player = array[i];

		var pool = [];
		for (var j = 0; j < array.length; j++) {
			if (array[j] !== array[i]) {
				pool.push(array[j]);
			}
		}
		player.pool = pool;

		allPlayers.push(player);
	}

return allPlayers;
}

function poolSelector(option, playerPools) {
	for (var j = 0; j < playerPools.length; j++) {
		var currentPool = [];
		if (option === playerPools[j].player) {
			currentPool = playerPools[j].pool;
			return currentPool;
		}
	}
}

function rebuildPool(player, allOptions) {
	for (var i = 0; i < allOptions.length; i++) {
		if (allOptions[i] === player) {
			allOptions.splice(i, 1);
			return allOptions
		}
	}

	//Repeat until currentWeekArray is empty
	//If only 2 left then random match not necessary
//If options run out, rebuild the arrays
//Repeat until amountOfWeeks is done
}