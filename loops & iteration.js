//for loop
/*for (var i = 0; i < 10; i++) {
        console.log(i);
} 

var john = ['John','Smith', 1992, 'Designer',false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}


//While loop

 var i = 0;
 while (i < john.length) {
     console.log(john[i]);
     i++;
 }
 */

 //Continue and break

 var john = ['John','Smith', 1992, 'Designer',false];

console.log('==========After Continue=========')
for (var i = 0; i < john.length; i++) {
    if ( typeof john[i] !== 'string') continue;
    console.log(john[i]);
}
console.log('==========================================================================')
console.log('==========After Break============')
for (var i = 0; i < john.length; i++) {
    if ( typeof john[i] !== 'string') break;
    console.log(john[i]);
}

//Looping Backwork
console.log('==========================================================================')
console.log('==========Looping Backwork============')
for (var i = john.length -1; i >= 0; i--) {
    console.log(john[i]);
}