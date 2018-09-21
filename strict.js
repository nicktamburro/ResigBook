"use strict";
//we use strict if we don't want the aliasing

function infiltrate(person){
    if (person === "gardener"){
        console.log("person is a gardener!");
    }

    if(arguments[0] === "gardener"){
        console.log("argument zero is a gardener!");
    }

    arguments[0] = "ninja";
//when we use strict, only arg 0 changes, not person!

    if(person === "ninja"){
        console.log("person is a ninja now!");
    }else{
        console.log("person is not a ninja!");
    }
    if(arguments[0] === "ninja"){
        console.log("arg 0 is a ninja now!");
    }

}
infiltrate("gardener");