function receivesAFunction(callback) {
    return callback();
}

console.log(receivesAFunction(function() {return "This is a callback function"}))

function returnsANamedFunction(namedFunction) {
    namedFunction = function(){
        console.log("Leo")
    }
    return namedFunction
}

console.log(returnsANamedFunction())


function returnsAnAnonymousFunction(){
    return function(){
        console.log("This is an anonymous function.")
    }
}

returnsAnAnonymousFunction()()
    

