function forEach(list, callback){
    //it takes a list and a callback
    for(var i=0; i<list.length; i++){
        //it loops over each list item
        callback.call(list[i], i);
        //and calls the callback (which in this case is the anonymous function
        //that console logs them all)
    }
}

//here's the list
var weapons = [{type: 'shuriken'},
               {type: 'katana'},
               {type: 'nunchuks'}];

//here we call it with weapons as the list, and our function as the callback
forEach(weapons, function(index){
    if(this === weapons[index]){
        console.log("got expected value of " + weapons[index].type);
    }
});