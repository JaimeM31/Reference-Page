/* 
  Warm-up
  1. Create a global variable called favFoods and assign it to be an array strings that are your top three favorite foods.
  2. Use console.log() to print out each element to the console individually
*/
var favFoods = ["Chicken Alfredo", "Pizza", "CheeseSteaks"]
console.log(favFoods[0]);
console.log(favFoods[1]);
console.log(favFoods[2]);
console.log(typeof(favFoods));




// Length property examples
console.log(favFoods.length)
console.log(favFoods[3]);


// .push() examples
var newLengt = favFoods.push("Sushi")
console.log(favFoods)

// .pop() examples
var lastItem = favFoods.pop();
console.log(lastItem)
console.log(favFoods)

var daysOfTheWeek = []
function problem1(){
 daysOfTheWeek.push("Monday");
 daysOfTheWeek.push("Tuesday");
 daysOfTheWeek.push("Wednesday");
 daysOfTheWeek.push("Thursday");
 daysOfTheWeek.push("Friday");
 daysOfTheWeek.push("Saturday");
 daysOfTheWeek.push("Sunday");
console.log(daysOfTheWeek)
printDays()
var lastItem = daysOfTheWeek.pop();
var LastItem = daysOfTheWeek.pop();
console.log(daysOfTheWeek)
var weekend = []
weekend.push("Saturday", "Sunday")
console.log(weekend)
printDays();
console.log(weekend[0]);
console.log(weekend[1]);

}

function printDays(){
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[2]);
  console.log(daysOfTheWeek[3]);
  console.log(daysOfTheWeek[4]);
  console.log(daysOfTheWeek[5]);
  console.log(daysOfTheWeek[6]);

}