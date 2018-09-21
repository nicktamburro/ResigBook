//rest parameters
function multiMax(first, ...remainingNumbers){
    var sorted = remainingNumbers.sort(function(a,b){
        return b - a;
    });
    console.log(first * sorted[0]);
}

multiMax(3, 1, 2, 3);
//so in this example, 3 is the "first" argument
//and everything else is ...remainingNumbers...
//this is the "rest parameter"... needs the ... to start it
//and has to be the last parameter in a function

//jasmine test
describe("multimax", function(){
    it("should multiply the first two digits after sort", function(){
        expect(multiMax(3, 1, 2, 3)).toBe(9);
    });
});