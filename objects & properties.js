// Object Literal
var cj = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    jobTitle: 'Developer',
    familyMembership:['Annie', 'Jay','kart','bob'],
    isMarital: true
};

console.log(cj);
console.log(cj.firstName);
console.log(cj['lastName']);
var x = 'birthYear';
console.log(cj[x]);

console.log('===================================================================')

//New Object Syntax

var joe = new Object;
joe.firstName = 'Joe';
joe.lastName = 'Alliance';
joe.birthYear = 1982;
console.log(joe);