function Ninja(){
    let feints = 0;
    this.getFeints = function(){
        return feints;
    };
    this.feint = function(){
        feints++;
    };
}

let ninja1 = new Ninja();
ninja1.feint();

if(ninja1.feints === undefined){
    console.log("the private data is unavailable to us");
}
if(ninja1.getFeints() === 1){
    console.log("we can access the internal feint count");
}

let ninja2 = new Ninja();
if (ninja2.getFeints() === 0){
    console.log("second ninja object gets its own feint count");
}