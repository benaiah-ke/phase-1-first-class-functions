function receivesAFunction (callback) {
    return callback();
}; 

const newFunction = () => console.log ("Hi there!");

receivesAFunction (newFunction);

function returnsANamedFunction () {
    return newFunction;
};

function returnsAnAnonymousFunction () {
    return () => {console.log ("An anonymous function")};
};