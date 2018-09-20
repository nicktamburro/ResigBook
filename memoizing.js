function isPrime(value){
    //this creates a cache, if we haven't already made it
    if (!isPrime.answers){
        isPrime.answers = {};
    }

//if the value is already in there (ie not undefined), return it
    if (isPrime.answers[value] !== undefined){
        return isPrime.answers[value];
    }

//
    var prime = value !== 1; //1 is not a prime

    for(var i=2; i<value; i++){
        if (value % i === 0){
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}

isPrime(5);
console.log("5 is prime!");
isPrime.answers[5];
console.log("this answer was stored!");