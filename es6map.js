//here we have an array
const continents = ['Savage Land', 'Wakanda', 'Latvertia', 'Danger Room'];

//we make a variable called message
//which takes continents and applies map to it
//
//a function called c, I think just because "continents" 
//which prints "Hello" and continents[0], and join make space
//then "Hello" and continents[1], and a space, etc etc
const message = continents.map(c => `Hello ${c}!`).join(" ");

//and then we make a component, which is a paragraph tag
//which gets filled with message
const component = <p>{message}</p>;