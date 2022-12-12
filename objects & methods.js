var joe = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    jobTitle: 'Developer',
    familyMembership:['Annie', 'Jay','kart','bob'],
    isMarital: true,
    calculateAge: function (birthYear){
        this.age =  2022 - this.birthYear;
    }
};
//joe.calculateAge();

console.log(joe);
