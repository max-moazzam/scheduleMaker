//Function inputs an array of players and a # of weeks and returns randomly created matchups so that no player plays each other more than once until theyve played everyone else at least once
	//Potential option for making Home/Away count

//Enter an array

//Randomize Array, set equal to currentWeekArray
//Create an array of arrays for each option of every other player not including themselves (arrayOfPools[currentOptionPool1, currentOptionPool2, ...])
//Select the first option of currentWeekArray, (player1)
//Select the corresponding currentOptionPool (player1currentOptionPool)
//Randomly match player1 with someone from player1currentOptionPool (player2)
//Cut out player2 from player1currentOptionPool
//Cut out player1 from player2currentOptionPool (set as option so home/away 1 for each is possible)
//Cut out player1 and player2 from currentWeekArray
//Repeat until currentWeekArray is empty
	//If only 2 left then random match not necessary
//If options run out, rebuild the arrays
//Repeat until amountOfWeeks is done


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