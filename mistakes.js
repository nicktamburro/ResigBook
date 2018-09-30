//trying to rewrite this from memory
//I don't have everything yet
let array = [5, 2, 3, 1, 6, 2];
let range = [1, 5];
let mistakeCount = 0;

let sortedArray = array.sort(function(a,b){
    return a - b;
});

for(let i = 0; i<sortedArray.length; i++){
// number is doubled
if(sortedArray[i] === sortedArray[i+1]){
    console.log("double")
    mistakeCount += 1;
    continue;
}
// out of range
if(sortedArray[i] < range[0] || sortedArray[i] > range[1]){
    console.log("out of range");
    mistakeCount += 1;
    continue;
}

// one is missing
if(sortedArray[i+1] != undefined && sortedArray[i+1] - sortedArray[i] != 1){
    console.log("one missing");
    mistakeCount += (sortedArray[i+1] - sortedArray[i] - 1);
    continue;
}


}
//this still isn't right!

console.log(mistakeCount);
