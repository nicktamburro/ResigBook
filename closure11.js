/*let outerValue = "ninja";
function outerFunction(){
    if(outerValue === "ninja"){
        console.log("i see the ninja");
    }else{
        console.log("the ninja is hidden to- arghhhhhhh!");
    }
}

outerFunction();*/

//so now
var outerValue = "samurai";
//an empty variable we'll use later...
var later;

function outerFunction(){
//a value inside the funciton, this variable's scope is limited to in here!
//can't be accessed from outside!
    var innerValue = "ninja";

//here's an inner function... innerValue is in THIS scope
    function innerFunction(){
        if (outerValue === "samurai"){
            console.log("i see the samurai");
        }
        if (innerValue === "ninja"){
            console.log("i see the ninja");
        }
    }
    later = innerFunction;
    //this stores a reference to innerFunction in the later var
}

//we invoke outerFunction, which causes InnerFunction() to be created!
//AND innerfunction gets assigned to later
outerFunction();

//we invoke innerFunction through later! We can't invoke it directly becauase of scope
//innerFunction(); 
//would fail
later();