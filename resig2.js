//getting into callbacks


//this just returns what you passed it, hands it back to you

var text = "domo arigato!";
console.log("before defining functions");

function useless(ninjaCallback){
    console.log("in useless function");
    return ninjaCallback();
}

function getText(){
    console.log("in getText function");
    //return text;
    console.log(text);
}

console.log("Before making the calls");

useless(getText);

console.log("After the calls have been made!");
s