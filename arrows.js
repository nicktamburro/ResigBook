var greet = (name) => console.log("Greetings " + name);
//if there's only one parameter, like here, you don't need ()
//but if there are none, or more than one, you do... so I just do them

//in an arrow, you don't have to write return!

var anotherGreet = function(name){
    console.log( "Greetings " + name);
};

//pretty much same function, one is an arrow, one a regular function expression

greet("Prince Jammy");
anotherGreet("Prince Rakeem");