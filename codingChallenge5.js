var johnFamilies = {
    fullName: 'John',
    bill: [124,48,268,180,42],

    calcTips: function(){
        this.allTips = [];
        this.paidAmount = [];
        for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            if (i<50) {
                percentage = .2;
            }else if (i=50 && i<200) {
                percentage = .15;
            }else { 
                percentage = .1;
            }
            this.allTips.push(percentage * this.bill[i]);
            this.paidAmount.push(this.bill[i] + this.allTips[i]);
        }
    }
};

var markFamilies = {
    fullName: 'Mark',
    bill: [77,475,268,110,45],

    calcTips: function(){
        this.allTips = [];
        this.paidAmount = [];
        for (var i = 0; i < this.bill.length; i++) {
            var percentage;
            if (i<100) {
                percentage = .2;
            }else if (i=100 && i<300) {
                percentage = .1;
            }else { 
                percentage = .25;
            }
            this.allTips.push(percentage * this.bill[i]);
            this.paidAmount.push(this.bill[i] + this.allTips[i]);
        }
    }
};

function averageCalculate (allTips) {
    var sum = 0;
    for (var i = 0; i < allTips.length; i++) {
        sum = sum + allTips[i];
        return  sum / allTips.length;
    }
}

johnFamilies.calcTips();
markFamilies.calcTips();
console.log(johnFamilies,markFamilies);

johnFamilies.average = averageCalculate(johnFamilies.allTips);
markFamilies.average = averageCalculate(markFamilies.allTips);
console.log(johnFamilies,markFamilies);

if (johnFamilies.average > markFamilies.average) {
    console.log(johnFamilies.fullName +'\'s family pay heigher tips, with a average amount of $'+ johnFamilies.average);
}else if(johnFamilies.average < markFamilies.average){
    console.log(markFamilies.fullName +'\'s family pay heigher tips, with a average amount of $'+ markFamilies.average);
}
   
