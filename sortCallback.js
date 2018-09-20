var values = [0, 3, 2, 5, 20];

values.sort(function(value1, value2){
    return(value1 - value2);
    
});

//here's the arrow function version of same thing
values.sort((value1, value2)=> value1- value2);

console.log(values);