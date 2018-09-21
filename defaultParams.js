function performAction(ninja, action){
    action = typeof action === "undefined" ? "skulking" : action;
    return ninja + " " + action;
}

performAction("Fuma"); //will say "Fuma skulking"
performAction("Hattori"); //will say "Hattori skulking"
performActon("Yagyu", "sneaking") //will say "Yagya sneaking"