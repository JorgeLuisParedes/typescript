(() => {

    // strictNullChecks
    // let isActive: boolean = undefined;
    let isActive: (boolean | null) = null;
    console.log(isActive);
})()