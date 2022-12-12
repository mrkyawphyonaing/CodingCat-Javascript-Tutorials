var person1 = {
    name: 'Mark',
    height: 2.3,
    mass: 50,
    calculateBMI: function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

var person2 = {
    name: 'John',
    height: 2.2,
    mass: 60,
    calculateBMI: function() {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
};

if (person1.calculateBMI() > person2.calculateBMI()) {
    console.log (person1.name + " has a higher BMI of " + person1.bmi);
}else if (person2.calculateBMI() > person1.calculateBMI()) {
    console.log (person2.name + " has a higher BMI of " + person2.bmi);
}else {
    console.log ("They have the same BMI")
}

