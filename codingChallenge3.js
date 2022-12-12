function calculateAge (birthYear) {
    return 2022 - birthYear;
}

var John_age = calculateAge(1992);
var Mike_age = calculateAge(1981);
var Marry_age = calculateAge(2000);

console.log(John_age,Mike_age,Marry_age);

function untilRetireAge(year,firstName){
var age = calculateAge(year);
var retirement = 65 - age;
    if(retirement>0) {
    console.log(firstName + " retire in " + retirement + " years! " );
    }else{
        console.log(firstName+ " is already retired!");
    }

}

untilRetireAge(1992,'John');
untilRetireAge(1982,'Mike');
untilRetireAge(1952,'Marry');

//Function expression

    var whatYouDo = function (job,firstName) {
        switch(job){
            case 'teacher':
                return firstName + " is teach the kids how to code.";
                break;
            case 'driver':
                return firstName + " is a drive taxi in the downtown.";
                break;
            case 'designer':
                return firstName + " is drawing a design";
                break;
            default : 
                return firstName + " is retired";
        }
    }

console.log(whatYouDo('teacher','John'));
console.log(whatYouDo('driver','Mike'));
console.log(whatYouDo('retire','Marry'));





