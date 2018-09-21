function whatever(a, b, c){
    if(a = 1){
        console.log("yo");
    }
    console.log(arguments);
    console.log(arguments.length);
    //arguments is NOT an object, you can's use array methods on it
}

whatever(1,2,3,4,5);

//here's another args thing
//THIS IS COOL because you don't have to know how many numbers you're going to sum
//it just takes however many you give it!
function sum(){
    var sum = 0;
    for (var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    console.log("sum: " + sum);
}

sum(1,2,3,4,5);

//rewritten with rest parameters!
function sum(a, ...otherNumbers){
   let sum = a;
   for(let i=0; i<otherNumbers.length; i++){
       sum += otherNumbers[i];
   }
  console.log("rest sum: " + sum);
    }
  




//here's another one
