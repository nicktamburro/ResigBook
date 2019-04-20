let outerValue = "samurai";
//okay outer value, straight up
let later;
//later is what we'll use later!


function outerFunction(){
    //2. ...which creates the inner value
    let innerValue = "ninja";

    //and gives us this inner function
    function innerFunction(){
        //these ifs are both true...
        if(outerValue === "samurai"){
            console.log("I can see the samurai");
        }
        if (innerValue === "ninja"){
            console.log("I can see the ninja too.");
        }


    }
    //while we're here, we set a value to later
            later = innerFunction;
}

//1. first we call the outerFunction
outerFunction();
//the scope of the function doesn't exist, but 
//we can still access it
later();