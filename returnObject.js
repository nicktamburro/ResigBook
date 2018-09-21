var puppet = {
    rules: false
};

//so the puppet doesn't rule,
//the emperor rules
//but it returns puppet
function Emperor(){
    this.rules = true;
    return puppet;
}
//if a constructor returns an object, the object is returned as the value
//of the whole NEW expression

var emperor = new Emperor();

if(emperor === puppet){
    console.log("the emperor is a puppet!");
}

if(emperor.rules === false){
    console.log("the puppet doesn't rule!");
}