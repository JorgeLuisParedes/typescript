(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo está salvado!`;

    //! let myFunction;
    //* let myFunction: (y: number, z: number) => number;
    //? let myFunction: (x: string) => string;
    let myFunction: () => string;

    //! myFunction = 10;
    //! console.log(myFunction);

    //* myFunction = addNumbers;
    //* console.log(myFunction(1, 2));

    //? myFunction = greet;
    //? console.log(myFunction('Jorge'));

    myFunction = saveTheWorld;
    console.log(myFunction());
})()