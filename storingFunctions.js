var store = {
    nextId: 1,
    cache: {},
    add: function(fn){
        if (!fn.id){
            fn.id = this.nextId++;
            this.cache[fn.id] = fn;
            return true;
        }
    }
};

function ninja(){};
function turtle(){};
store.add(ninja);
store.add(turtle);
//it doesn't add this, because ninja already has an id!
store.add(ninja);

console.log(store.cache);