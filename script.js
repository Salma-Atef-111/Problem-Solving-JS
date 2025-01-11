"use strict";
//!Challenge 1

/*
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter). 

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall. */

//todo : what to do :
//1-Store Mark's and John's mass and height in variables
//2-Calculate both their BMIs using the formula (you can even implement both )
//3-3. Create a Boolean variable 'markHigherBMI' containing information about < >

//1

// let markMess = 78;
// let markHight = 1.69;
// let johnMess = 92;
// let johnHight = 1.95;

//2

// let BmIMark = markMess / markHight ** 2; //27
// let BmIJohn = johnMess / johnHight ** 2; //24
// console.log(BmIMark);
// console.log(BmIJohn);

//3

// let markHigherBMI = BmIMark >= BmIJohn;
// console.log(markHigherBMI);

//!Challenge 2

/*
todo : Your tasks: 
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!" 

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's 
BMI (28.3) is higher than John's (23.9)!"*/

// let markMess = 78;
// let markHight = 1.69;
// let johnMess = 92;
// let johnHight = 1.95;

// let BmIMark = markMess / markHight ** 2; //27
// let BmIJohn = johnMess / johnHight ** 2; //24
// console.log(BmIMark);
// console.log(BmIJohn);

//1
// if (BmIMark >= BmIJohn) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

//2

// if (BmIMark <= BmIJohn) {
//   console.log(`Mark's BMI ${BmIMark} is higher than John's ${BmIJohn}!`);
// } else {
//   console.log(`John's BMI ${BmIJohn} is less than Mark's ${BmIMark}!`);
// }

//!Challenge 3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times
//The winner with the highest average score wins a trophy!

//todo : Your tasks:
//1. Calculate the average score for each team, using the test data below

/*2. Compare the team's average scores to determine the winner of the competition,
and print it to the console.
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)*/

/*3.

Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
team only wins if it has a higher score than the other team, and the same time a 
score of at least 100 points.

Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
both teams have the same score and both have a score greater or equal 100 
points. Otherwise, no team wins the trophy


//? Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 

*/
//! Test data:
// Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//!1
// let dolphinsScore = 96 + 108 + 89; //293
// let koalasScore = 88 + 91 + 110; //289
// console.log(dolphinsScore, koalasScore);

// let dolphinsAverageScore = dolphinsScore / 3; //97
// let koalasAverageScore = koalasScore / 3; //96
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore) {
//   console.log(
//     `dolphins are the winner by score ${dolphinsAverageScore} above koalas${koalasAverageScore}`
//   );
// } else if (koalasAverageScore > dolphinsAverageScore) {
//   console.log(
//     `koalas are the winner by score ${koalasAverageScore} above dolphins ${dolphinsAverageScore}`
//   );
// } else if (dolphinsAverageScore === koalasAverageScore) {
//   console.log(`We have a Draw both won`);
// }

///////////////////////////////////////////////
//!2
// let dolphinsAverageScore = (97 + 112 + 101) / 3; //103
// let koalasAverageScore = (109 + 95 + 123) / 3; //109
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//   console.log(
//     `dolphins are the winner by score ${dolphinsAverageScore} above koalas${koalasAverageScore}`
//   );
// } else if (
//   koalasAverageScore > dolphinsAverageScore &&
//   koalasAverageScore >= 100
// ) {
//   console.log(
//     `koalas are the winner by score ${koalasAverageScore} above dolphins ${dolphinsAverageScore}`
//   );
// } else if (dolphinsAverageScore === koalasAverageScore) {
//   console.log(`We have a Draw both won`);
// }
////////////////////////////////////////////////////////
//!3

// let dolphinsAverageScore = (97 + 112 + 101) / 3; //103
// let koalasAverageScore = (109 + 95 + 106) / 3; //103
// console.log(dolphinsAverageScore, koalasAverageScore);

// if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
//   console.log(
//     `dolphins are the winner by score ${dolphinsAverageScore} above koalas${koalasAverageScore}`
//   );
// } else if (
//   koalasAverageScore > dolphinsAverageScore &&
//   koalasAverageScore >= 100
// ) {
//   console.log(
//     `koalas are the winner by score ${koalasAverageScore} above dolphins ${dolphinsAverageScore}`
//   );
// } else if (
//   dolphinsAverageScore === koalasAverageScore &&
//   dolphinsAverageScore >= 100 &&
//   koalasAverageScore >= 100
// ) {
//   console.log(`We have a Draw both won`);
// } else {
//   console.log("no one won ");
// }
////////////////////////////////////////////////////////////

//!Challenge 4

/* Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country,
it's usual to tip 15% if the bill value is between 50 and 300.
If the value is different, the tip is 20%. */

//todo :

/*1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. //?It's not allowed to use an if/else statement 

2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
Example: “The bill was 275, the tip was 41.25, and the total value 316.25” */

/*Test data: 
Data 1: Test for bill values 275, 40 and 430 
Hints: 
To calculate 20% of a value, simply multiply it by 20/100 = 0.2 
§ Value X is between 50 and 300, if it's >= 50 && <= 300 */

/////////////////////////////
// data1

// let bill = 275;
// let prs = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
// let tip = bill * prs;
// let total = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
// );
//////////////////////////
// data 2

// let bill = 430;
// let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

///////////////////////////////////////
//!Challenge 5

/*Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. 
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). 
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!*/

//todo :Your tasks:
/* 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores 
2. Use the function to calculate the average for both teams 
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'),
and then logs the winner to the console, together with the victory points, according to the rule above.Example: "Koalas win (30 vs. 13)" 
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2 
5. Ignore draws this time 
*/

//!Test data:
/*
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49 
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27 

Hints: 
§ To calculate average of 3 values, add them all together and divide by 3 
§ To check if number A is at least double number B, check for A >= 2 * B.Apply this to the team's average scores */

//! The answer

// let calcAverageDolphins = (dolphinsScore) => dolphinsScore / 3;
// const dolphinsAverageScore = calcAverageDolphins(44 + 23 + 71);
// console.log(dolphinsAverageScore);

// let calcAverageKoalas = (koalasScore) => koalasScore / 3;
// const koalasAverageScore = calcAverageKoalas(65 + 54 + 49);
// console.log(koalasAverageScore);

// function checkWinner(dolphinsAverageScore, koalasAverageScore) {
//   calcAverageDolphins(dolphinsAverageScore);
//   calcAverageKoalas(koalasAverageScore);
//   if (dolphinsAverageScore >= koalasAverageScore) {
//     console.log(
//       `dolphins win (${dolphinsAverageScore} vs ${koalasAverageScore})`
//     );
//   } else if (koalasAverageScore >= dolphinsAverageScore) {
//     console.log(
//       `koalas win (${koalasAverageScore} vs ${dolphinsAverageScore})`
//     );
//   }
// }
// checkWinner(dolphinsAverageScore, koalasAverageScore);

// let calcAverageDolphins2 = (dolphinsScore) => dolphinsScore / 3;
// const dolphinsAverageScore2 = calcAverageDolphins(85 + 54 + 41);

// let calcAverageKoalas2 = (koalasScore) => koalasScore / 3;
// const koalasAverageScore2 = calcAverageKoalas(23 + 34 + 27);

// checkWinner(dolphinsAverageScore2, koalasAverageScore2);

//////////////////////////////////////////////////////
//!Challenge 6

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%. */

//todo :Your tasks:
/*
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to).
Use the function type you like the most.
Test the function using a bill value of 100 
2. And now let's use arrays! So create an array 'bills' containing the test data below 
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before 
4. Bonus: Create an array 'total' containing the total values, so the bill + tip */

//!Test data:
// 125, 555 and 44

//?Hint:
/* Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) */

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }
// console.log(calcTip(100));

// let bills = [125, 555, 44];

// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

//////////////////////////////////////////////////
//!Challenge 7

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass
(height * height) (mass in kg and height in meter)*/

//todo :Your tasks:
/*
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"*/

//!Test data:
// Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

// const markBMI = {
//   fullName: "Mark Miller",
//   mass: 78,
//   hight: 1.69,
//   clacBMI: function () {
//     this.bmi = this.mass / this.hight ** 2;
//     return this.bmi;
//   },
// };
// const johnBMI = {
//   fullName: "John Smith",
//   mass: 92,
//   hight: 1.95,
//   clacBMI: function () {
//     this.bmi = this.mass / this.hight ** 2;
//     return this.bmi;
//   },
// };
// if (markBMI.clacBMI() > johnBMI.clacBMI()) {
//   console.log(
//     `${markBMI.fullName}'s BMI ${markBMI.clacBMI()} is higher than ${
//       johnBMI.fullName
//     }'s ${johnBMI.clacBMI()}` //27
//   );
// } else {
//   console.log(
//     `${johnBMI.fullName}'s BMI ${johnBMI.clacBMI()} is higher than ${
//       markBMI.fullName
//     }'s ${markBMI.clacBMI()}` //24
//   );
// }

///////////////////////////////////////////////

//!Challenge 7

//Let's improve Steven's tip calculator even more, this time using loops!

//todo :Your tasks:

/*1. Create an array 'bills' containing all 10 test bill values 
2. Create empty arrays for the tips and the totals ('tips' and 'totals') 

3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for 
loop to perform the 10 calculations!

Bonus: 
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given array. 
*/

//!Test data:
//22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

//? Hints:
// Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays

/*This is a difficult challenge (we haven't done this before)! Here is how to 
solve it: 
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together 

4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements) 

4.3. Call the function with the 'totals' array*/

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }
// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let tips = [];
// let totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// function calcAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   //   console.log(sum);
//   return sum / arr.length;
// }
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));
////////////////////////////////////////////////////////////////

//! Extra

/*
We work for a company building a smart home thermometer.
Our most recent task is this: "Given an array of temperatures of one day,
calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.*/

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// function calcTempAmplitude(tmps) {
//   let max = tmps[0];
//   let min = tmps[0];
//   for (let i = 0; i < tmps.length; i++) {
//     if (typeof tmps[i] !== "number") continue;

//     if (tmps[i] > max) max = tmps[i];
//     if (tmps[i] < min) min = tmps[i];
//   }
//   //   console.log(max, min);
//   return max - min;
// }
// // calcTempAmplitude([1, 5, 9]);
// const amplitude = calcTempAmplitude(temperatures);
// console.log(amplitude);

/////////////////////////////////////////////////////
//! Challenge 8

/*We're building a football betting app (soccer for my American friends)! 
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.*/

//todo :Your tasks:
/*
1. Create one player array for each team (variables 'players1' and 
  'players2') 
  2. The first player in any player array is the goalkeeper and the others are field 
  players. For Bayern Munich (team 1) create one variable ('gk') with the 
  goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
  field players 
  3. Create an array 'allPlayers' containing all players of both teams (22 
  players) 
  4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
  new array ('players1Final') containing all the original team1 players plus 
  'Thiago', 'Coutinho' and 'Perisic' 
  5. Based on the game.odds object, create one variable for each odd (called 
  'team1', 'draw' and 'team2') 
  6. Write a function ('printGoals') that receives an arbitrary number of player 
  names (not an array) and prints each of them to the console, along with the 
  number of goals that were scored in total (number of player names passed in) 
  7. The team with the lower odd is more likely to win. Print to the console which 
  team is more likely to win, without using an if/else statement or the ternary 
  operator. 
*/
//?Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1,players2]=game.players;
// console.log(players1,players2);

// const [gk, ...fieldPlayers] = players1;
// const [gk2, ...fieldPlayers2] = players2;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// const { team1, x:draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// function printGoals(...players) {
//   console.log(players.length);
// }
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");

// printGoals(...game.scored)

// team1 < team2 && console.log("team1 is more likely to win");


////////////////////////////////////////////////////
//! Challenge 9 
// Let's continue with our football betting app! Keep using the 'game' variable from before. 
/* 
todo:  Your tasks: 
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
same property names 

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
Gnarby: 1, 
Hummels: 1, 
Lewandowski: 2
} 
*/

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// //1- 
// for(const [i , el] of game.scored.entries()){
//   console.log(`Goal ${i+1}: ${el}`);
// }
// //2-
// const odd = Object.values(game.odds);
// // console.log(odd);
// let avg = 0;
// for (const n of odd)
//   avg += n;
//   avg /= odd.length
//   console.log(avg);
// //3- 
// const allOdds = Object.entries(game.odds);
// // console.log(allOdds);

// for(const [team , el] of allOdds){
//   const teamS = team === "x" ? "draw" :`victory ${game[team]}`
//   console.log(`Odd of victory ${teamS}: ${el}`);
// }

/////////////////////////////////////////
//! Challenge 10
/*
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
*/
//todo:  Your tasks: 
/*
1. Create an array 'events' of the different game events that happened (no 
duplicates) 
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log. 
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes) 
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this: 
[FIRST HALF] 17:  GOAL 
*/

// const gameEvents = new Map([ 
//   [17, '⚽ GOAL'], 
//   [36, '🔁 Substitution'], 
//   [47, '⚽ GOAL'], 
//   [61, '🔁 Substitution'], 
//   [64, '🔶 Yellow card'], 
//   [69, '🔴 Red card'], 
//   [70, '🔁 Substitution'], 
//   [72, '🔁 Substitution'], 
//   [76, '⚽ GOAL'], 
//   [80, '⚽ GOAL'], 
//   [92, '🔶 Yellow card'], 
//   ]); 


// // 1-
// const events = [...new Set(gameEvents.values())];
// console.log(events);


// //2-
// gameEvents.delete(64);
// console.log(gameEvents);

// //3-
// console.log(`An event happened, on average, every ${90/gameEvents.size } minutes`);
// //bouns
// const time = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${time/gameEvents.size } minutes`);

// //4-
// for (const [key,value] of gameEvents){
//   if(key <= 45){
//     console.log(`First half ${key}: ${value}`);
//   }
//   else{
//     console.log(`second half ${key}: ${value}`);
//   }
// }

/////////////////////////////////////////
//! Challenge 11
/*
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase. 
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
*/

/*
Test data (pasted to textarea, including spaces): 
underscore_case 
first_name 
Some_Variable  
calculate_AGE 
delayed_departure

todo:  Your tasks: 
Should produce this output (5 separate console.log outputs): 
underscoreCase      
✅ 
firstName           
✅✅ 
someVariable        
✅✅✅ 
calculateAge        
✅✅✅✅ 
delayedDeparture    
✅✅✅✅✅
*/
//?Hints: 
/*
§ Remember which character defines a new line in the textarea 
§ The solution only needs to work for a variable made out of 2 words, like a_b 
§ Start without worrying about the 
name conversion working 
✅. Tackle that only after you have the variable 
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue! 
Afterwards, test with your own test data! */

document.body.append(document.createElement('textarea')); 
document.body.append(document.createElement('button'));

const button = document.querySelector("button");

button.addEventListener("click" , function(){
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n")
  for(const [i,row] of rows.entries()){
  const [first , second] = row.toLowerCase().trim().split("_");
  const outPut = `${first}${second.replace(second[0] , second[0].toUpperCase())}`
  console.log(`${outPut.padEnd(20)}${'✅'.repeat(i+1)}`);
  }
})
