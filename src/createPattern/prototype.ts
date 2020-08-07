export interface Prototype {
    name: string;
    clone(): Prototype;

}

export class ConcreatePrototype implements Prototype {

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(){
        return this._name
    }

    set name(value: string) {
        this._name = value;
    }

    clone(): Prototype {
        return Object.create(this);
    }
}
