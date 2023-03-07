// Problem #1
function minToSec(min){
  var sec = min * 60;
  return sec;
}

console.log(minToSec(1));
console.log(minToSec(4));


// Problem 2
function lessThan100(num1,num2){
  var numSum = num1 + num2
  if (numSum < 100){
    return true
  }else{
    return false
  }
}

console.log(lessThan100(20, 30))

// Problem 3
function areaOfTriangle(num1, num2){
  var triArea = .5 * num1 * num2
  return triArea;
}

console.log(areaOfTriangle(6, 10))

//Problem 4
function nextEven(num1){
  var nextNum = num1
  if(num1 % 2 == 0){
    nextNum = num1 + 2;
    return nextNum;
  }else{
    nextNum = num1 + 1;
    return nextNum
  }
}

console.log(nextEven(7))

// Problem 5
function ageInSeconds(num1){
  var ageSec = num1 * 31536000
  return ageSec
}

console.log(ageInSeconds(7))

//Problem 6
function power(num1, num2){
  powNum= num1;
  for (var i = 0; i <= num2; i++){
    product = num1 * num1
  }
  return powNum
}
console.log(power(2,3))

//Problem 7
function remainder(num1, num2){
  rem = num1% num2;
  return rem;
}
console.log(remainder(7, 4))

// Problem 8 
function ballScore(one, two){
  var score = (one * 2) + (two * 3);
  return score;
}
console.log(ballScore(10,5))

// Problem 9
function footballScore(numT, numEP){
  var tTotal = numT * 6;
  var epTotal = numEP * 3;
  var pTotal = tTotal + epTotal;
  return pTotal;
}
console.log(footballScore(3,4))

// Problem 10
function countLegs(chickLegs, cowLegs, pigLegs){
  var chickTotal = chickLegs * 2;
  var cowTotal = cowLegs * 4;
  var pigTotal = pigLegs * 4
  var legTotal = chickTotal + cowTotal + pigTotal;
  return legTotal;
}
console.log(countLegs(2,3,4))