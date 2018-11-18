let outerValue = "samurai";
let later;

function outerFunction(){
    let innerValue = "ninja";

    function innerFunction(){
        if(outerValue === "samurai"){
            console.log("I can see the samurai");
        }
        if (innerValue === "ninja"){
            console.log("I can see the ninja too.");
        }


    }
            later = innerFunction;
}

outerFunction();

later();