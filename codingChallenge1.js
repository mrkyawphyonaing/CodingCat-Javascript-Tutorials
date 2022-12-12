//                  Coding Challenge

var markMass = 60;
var johnMass = 50;
var markHeight = 2.3;
var johnHeight = 2.2;

var markBMI = markMass / (markHeight * markHeight);
console.log('Mark\'s BMI is ' + markBMI);

var johnBMI = johnMass / (johnHeight * johnHeight);
console.log('John\'s BMI is ' + johnBMI);

var compare = markBMI > johnBMI;

console.log('Something like Is Mark\'s BMI higher than John\'s? ' + compare+'!');