class SharedValueChildren {
    private value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }

    setValue(value: string) {
        if(typeof value === 'string' && value.length > 0) {
            this.value = value;
        } else 
            throw new Error('El valor debe ser un string con al menos un caracter');
    }
}

export const sharedValueChildren = new SharedValueChildren('');
