const { returns } = require("chai-spies");

function receivesAFunction(callback) {
   callback();
}

function returnsANamedFunction() {
    return function namedFunc() {
        return('This is a named function');
    }
}

function returnsAnAnonymousFunction() {
    return () => console.log('anonymous function');
}