
function receivesAFunction(cb) {
    cb();
} // end of receivesAFunction



const returnsANamedFunction = () => function NamedFunction(){"pew-pew"};

const returnsAnAnonymousFunction = () => function(){console.log("pew")}


/*
take no arguments
return a named function
The returnsAnAnonymousFunction function should:

take no arguments
return an anonymous function
*/