"use strict";
(function () {
    var myCustomVarible = 'Jorge Luis';
    console.log(myCustomVarible);
    console.log(typeof myCustomVarible);
    myCustomVarible = 20;
    console.log(myCustomVarible);
    console.log(typeof myCustomVarible);
    myCustomVarible = {
        name: 'Bruce',
        age: 43,
        powers: [1]
    };
    console.log(myCustomVarible);
    console.log(typeof myCustomVarible);
})();
