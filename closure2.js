var outerValue = "samurai";
var later;

function outerFunction(){
    var innerValue = "ninja";

    function innerFunction(){
        if(outerValue === "samurai"){
            console.log("i see the samurai");
        }
        if(innerValue === "ninja"){
            console.log("i see the ninja");
        }
    }
    later = innerFunction();
}

outerFunction();