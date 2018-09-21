//this is the old pre-ES6 way
function performAction(ninja, action){
    action = typeof action === "undefined" ? "skulking" : action;
    return ninja + " " + action;
}

performAction("Fuma"); //will say "Fuma skulking"
performAction("Hattori"); //will say "Hattori skulking"
performActon("Yagyu", "sneaking") //will say "Yagya sneaking"

//====================================================================================
//heres the default parameters way
//you can just put it in the arguments!
function performAction(ninja, action = "skulking"){
    return ninja + " " + action;
}

performAction("Fuma"); //will say "Fuma skulking"
performAction("Hattori"); //will say "Hattori skulking"
performActon("Yagyu", "sneaking") //will say "Yagya sneaking"
