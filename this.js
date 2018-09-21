function whatsMyContext(){
    return this;
}

if(whatsMyContext() === window){
    console.log("wMC = window");
}

var getMyThis = whatsMyContext;

if(getMyThis() === window){
    console.log("gMT === window");
}

var ninja1 = {
    getMyThis: whatsMyContext
};

if(ninja1.getMyThis() === ninja1){
    console.log("ninja1!");
}

var ninja2 = {
    getMyThis: whatsMyContext
};

if(ninja2.getMyThis() === ninja2){
    console.log("ninja2!");
}
    