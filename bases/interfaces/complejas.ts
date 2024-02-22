(() => {
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Jorge Luis',
        age: 44,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Oviedo'
        },
        getFullAddress(id: string) {
            return this.address.city
        },
    }

    const client2: Client = {
        name: 'Jorge Alejandro',
        age: 3,
        address: {
            city: 'Llanes',
            id: 120,
            zip: 'K2S U2A'
        },
        getFullAddress(id: string) {
            return this.address.city
        },
    }
})()