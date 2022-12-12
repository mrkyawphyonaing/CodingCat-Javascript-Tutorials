//Initialize Array
var names = ['John','Marry','Mike','Jame','Hunny'];
var years = new Array(1990,1992,1982,2000);
console.log(names);
console.log(years);
console.log(names[2]);
console.log(names.length);
console.log("===============================================================================");

//Mutate array data
names[1] = 'Ban';
names[names.length] = 'Jay';
console.log("After Mutating");
console.log(names);

console.log("===============================================================================");

//Different Data types
var john = ['John','Smith', 1992, 'Designer',false];
console.log("Using different");
console.log(john);
console.log("===============================================================================");

john.push('jay');
john.unshift('Mr.');
console.log("Using push & unshift");
console.log(john);
console.log("===============================================================================");
john.pop();
john.shift();
console.log("Using pop & shift");
console.log(john);
console.log("===============================================================================");
console.log(john.indexOf(1992));
console.log(john.indexOf(12));
console.log("===============================================================================");
var isDesigner = john.indexOf('Designer') === -1 ? console.log("John is not a designer") : console.log ("John is a designer");

