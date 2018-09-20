function skulk(ninja){
    return performAction(ninja, "skulking");
}

var performAction = function (person, action){
        console.log(person + " - " + action);
    };

var rule = (daimyo) => performAction(daimyo, "ruling");

skulk("Hattori");
rule("Oda Nobunaga");
