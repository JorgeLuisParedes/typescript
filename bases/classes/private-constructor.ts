(() => {
    class Apocalipsis {
        static instance: Apocalipsis;
        private constructor(public name: string) { }

        static callApocalipsis(): Apocalipsis {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }

            return Apocalipsis.instance;
        }

        changeName(newName: string): void {
            this.name = newName;
        }
    }

    const apocalipsis = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis.changeName('Xavier');
    // const apocalipsis = new Apocalipsis('Soy Apocalipsis... el único');
    console.log(apocalipsis, apocalipsis2, apocalipsis3);
})()