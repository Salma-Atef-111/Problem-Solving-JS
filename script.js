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
