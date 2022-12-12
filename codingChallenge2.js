//                  Coding Challenge 

/* John , Mike and Marry are Play a Basketball in different Teams.They were played three games. 
   Decide which team win the average highest score and print the winner to the console.
   Like before, Change the score to generate different winners, keeping in mind there might be Draw*/

var johnGameOne = 125;
var johnGameTwo = 125;
var johnGameThree = 125;

var mikeGameOne = 122;
var mikeGameTwo = 125;
var mikeGameThree = 125;

var marryGameOne = 115;
var marryGameTwo = 134;
var marryGameThree = 105;

// Calculate the average Score and print to console 

var johnAverageScore = (johnGameOne+johnGameTwo+johnGameThree)/3;
console.log('John\'s Team Score is '+ johnAverageScore);

var mikeAverageScore = (mikeGameOne+mikeGameTwo+mikeGameThree)/3;
console.log('Mike\'s Team Score is '+ mikeAverageScore);

var marryAverageScore = (marryGameOne+marryGameTwo+marryGameThree)/3;
console.log('Marry\'s Team Score is '+ marryAverageScore);

// Print winner to the Console

switch (true) {
        case johnAverageScore>mikeAverageScore && johnAverageScore>marryAverageScore:
            console.log('John\'s Team win the game with score' + ' ('+johnAverageScore+ ')' + '!');
            break;
        case mikeAverageScore>johnAverageScore && mikeAverageScore>marryAverageScore:
            console.log('Mike\'s Team win the game with score' + ' ('+mikeAverageScore+ ' )' + '!');
            break;
        case marryAverageScore>johnAverageScore && marryAverageScore>mikeAverageScore:
            console.log ('Marry\'s Team win the game with score' + ' ('+marryAverageScore+ ')' + '!');
            break;  
        default:
            console.log('This game is draw');
            break;
}

