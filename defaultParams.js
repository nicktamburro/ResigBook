//this is the old pre-ES6 way
function performAction(ninja, action){
    //if the action is undefined, make it "skulking" 
    //if it IS defined, make it whatever it already is
    action = typeof action === "undefined" ? "skulking" : action;
    return ninja + " " + action;
}

performAction("Fuma"); //will say "Fuma skulking"
performAction("Hattori"); //will say "Hattori skulking"
performActon("Yagyu", "sneaking") //will say "Yagya sneaking"

//====================================================================================
//heres the default parameters way
//you can just put it in the arguments!
//
//here, the action will be skulking, UNLESS we say otherwise
function performAction(ninja, action = "skulking"){
    return ninja + " " + action;
    console.log("default param at work here");
}

performAction("Fuma"); //will say "Fuma skulking"
performAction("Hattori"); //will say "Hattori skulking"
performActon("Yagyu", "sneaking") //will say "Yagya sneaking"

//===================================================================================
//could even do:
function performAction(ninja, action = "skulking", message = ninja + " " + action){
    return message;
}
