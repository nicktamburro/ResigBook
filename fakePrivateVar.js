//a fake plastic var-i-a-ble...
function Ninja(){
    //remember CAPS!
    var feints = 0;
    //ninja has these two methods, that's why this... 
    //because when we make a new instance, we want those to have the same methods
    this.getFeints = function(){
        return feints;
    };
    //has to be "this" because of the new objects we make
    //can't just do function getFeints()
    //because then it wouldn't exist in the new instantations
    this.feint = function(){
        feints++;
    };
}

var ninja1 = new Ninja();
ninja1.feint();

if(ninja1.feints === undefined){
    console.log("we can't see these from out here!");
}if(ninja1.getFeints() === 1){
    console.log("nowwww we can see it! it's 1!");
}

var ninja2 = new Ninja();
if(ninja2.getFeints() === 0){
    console.log("and we can see that this is zero");
}