/* 
Given a number and an object with min and max properties, 
return true if the number lies within the given range (inclusive).

Examples:
isInRange(4, { min: 0, max: 5 }) ➞ true
isInRange(4, { min: 4, max: 5 }) ➞ true
isInRange(4, { min: 6, max: 10 }) ➞ false
isInRange(5, { min: 5, max: 5 }) ➞ true
*/

function isInRange(num, range) {
	var minimum = range.min;
	var maximum = range.max;

  return num >= minimum && num <= maximum;
 }

 // testing our function by calling it 
console.log((isInRange(4, { min: 0, max: 5 }))) // --> true
console.log((isInRange(4, { min: 4, max: 5 }))) // --> true
console.log((isInRange(4, { min: 0, max: 4 }))) // --> true
console.log((isInRange(4, { min: 6, max: 10 }))) // --> false
console.log((isInRange(11, { min: 6, max: 10 }))) // --> false
console.log((isInRange(5, { min: 5, max: 5 }))) // --> true
console.log((isInRange(1.5, { min: 1.25, max: 1.75 }))) // --> true
console.log((isInRange(1.8, { min: 1.25, max: 1.75 }))) // --> false
console.log((isInRange(-1, { min: -1, max: 1 }))) // --> true

/*
Create a function that takes three number arguments — one number as an input and 
two additional numbers representing the endpoints of a closed range — and 
return the number limited to this range.

If the number falls within the range, the number should be returned.
If the number is less than the lower limit of the range, the lower limit should be returned.
If the number is greater than the upper limit of the range, the upper limit should be returned.

Examples:
limitNumber(5, 1, 10) ➞ 5
limitNumber(14, 1, 10) ➞ 10
limitNumber(4.6, 1, 10) ➞ 4.6
*/

function limitNumber(num, rangeLow, rangeHigh) {
    return (num >= rangeLow && num <= rangeHigh) ? num
         : (num <= rangeLow) ? rangeLow
         : (num > rangeHigh) ? rangeHigh
         : null;
}

// testing our function by calling it 
console.log((limitNumber(5, 1, 10))) // --> 5
console.log((limitNumber(-3, 1, 10))) // --> 1
console.log((limitNumber(4.6, 1, 10))) // --> 4.6
console.log((limitNumber(-100, -73, -70))) // --> -73
console.log((limitNumber(2, -73, -70))) // --> -70
console.log((limitNumber(-71.5, -73, -70))) // --> -71.5
console.log((limitNumber(9, 8, 8.1))) // --> 8.1
console.log((limitNumber(8.05, 8, 8.1))) // --> 8.05
console.log((limitNumber(16, 16, 16))) // --> 16
console.log((limitNumber(-1, 16, 16))) // --> 16
console.log((limitNumber(800, 16, 16))) // --> 16