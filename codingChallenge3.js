/*
//Variables declaration
    var firstRestaurant = 48;
    var secondRestaurant = 124;
    var thirdRestaurant = 268;
//write the function
function tipCalculator(bill){
    if (bill<50 || bill==50){
        return bill*0.2;
    }else if (bill>50 || bill<200) {
        return bill*0.15;
    }else if (bill==200 || bill>200){
        return bill*0.1;
    }
}

//console.log(tipCalculator(200));

var alltips = [];
alltips.push(tipCalculator(firstRestaurant));
alltips.push(tipCalculator(secondRestaurant));
alltips.push(tipCalculator(thirdRestaurant));
console.log("Amout of three tips is : " + alltips);
console.log('=========================================================================================')
var finalPaidAmount = [];
finalPaidAmount.push(tipCalculator(firstRestaurant)+firstRestaurant);
finalPaidAmount.push(tipCalculator(secondRestaurant)+secondRestaurant);
finalPaidAmount.push(tipCalculator(thirdRestaurant)+thirdRestaurant);
console.log("FinalPayedAmount is : " + finalPaidAmount);
*/

function tipCalculator(bill) {
    var percentage;
    if (bill<50) {
        percentage = .2;
    }else if (bill>=50 && bill<200) {
        percentage = .15;
    }else { 
        percentage = .1;
    }
    return percentage * bill;
}
var bill = [48,148,268];
var tips = [tipCalculator(bill[0]),
            tipCalculator(bill[1]),
            tipCalculator(bill[2])];
console.log("Amout of three tips is : " +tips);
console.log('=========================================================================================')
var finalPaidAmount = [bill[0]+tips[0],
                        bill[0]+tips[0],
                        bill[0]+tips[0]];
console.log("FinalPayedAmount is : "+finalPaidAmount);
