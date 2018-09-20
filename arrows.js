var greet = name => console.log("Greetings " + name);

//in an arrow, you don't have to write return!

var anotherGreet = function(name){
    console.log( "Greetings " + name);
};

//pretty much same function, one is an arrow, one a regular function expression

greet("Prince Jammy");
anotherGreet("Prince Rakeem");