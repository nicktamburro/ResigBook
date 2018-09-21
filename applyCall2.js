function juggle(){
    var result = 0;
    for (var i=0; i<arguments.length; i++){
        result += arguments[i];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1,2,3,4]);
//apply takes only one additional arg, so we make it an array
juggle.call(ninja2, 5,6,7,8);
//call takes as many as needed

console.log(ninja1.result);
console.log(ninja2.result);