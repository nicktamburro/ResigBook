function Ninja(){
    this.skulk = function(){
        console.log("this ninja is skulking");
        
    };

    return 1;
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();

if(Ninja() === 1){
    console.log("ninja1 returns 1!");
}

if(typeof ninja1 === "object"){
    console.log("ninja1 is an object");
}

ninja1.skulk();
