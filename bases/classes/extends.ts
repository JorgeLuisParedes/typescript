(() => {
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            // console.log('Construnctor Avenger llamado!');
        }
        protected getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super(name, realName);
            // console.log('Constructor Xmen llamado');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if (name.length < 3) {
                throw new Error('El nombre debe de ser mayor de 3 letras');
            }
            this.name = name;
        }

        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);

    // GET
    // console.log(wolverine.fullName);

    // SET
    wolverine.fullName = 'Jorge Luis';
    // console.log(wolverine.fullName);


    // METHOD EXTENDS
    // wolverine.getFullNameDesdeXmen();

})()