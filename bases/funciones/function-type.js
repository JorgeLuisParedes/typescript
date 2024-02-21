"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    //! let myFunction;
    //* let myFunction: (y: number, z: number) => number;
    //? let myFunction: (x: string) => string;
    var myFunction;
    //! myFunction = 10;
    //! console.log(myFunction);
    //* myFunction = addNumbers;
    //* console.log(myFunction(1, 2));
    //? myFunction = greet;
    //? console.log(myFunction('Jorge'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
