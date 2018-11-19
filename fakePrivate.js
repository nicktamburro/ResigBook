function Ninja(){
    //a constructor
    //each instance get a feints variable
    let feints = 0;
    //and a method for accessing feints
    this.getFeints = function(){
        return feints;
    };
    //and a method for increasing feint count
    this.feint = function(){
        feints++;
    };
}

//we make ninja1, a new instance of Ninja
let ninja1 = new Ninja();
//and we ask it to feint
ninja1.feint();

//but we can't get it just like this, bc we're emulating a private variable
if(ninja1.feints === undefined){
    console.log("the private data is unavailable to us");
}
//we have to get it like this, through the method
if(ninja1.getFeints() === 1){
    console.log("we can access the internal feint count");
}

//and now a second instance, etc
let ninja2 = new Ninja();
if (ninja2.getFeints() === 0){
    console.log("second ninja object gets its own feint count");
}