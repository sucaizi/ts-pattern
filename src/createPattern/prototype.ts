export interface Prototype {
    clone(): Prototype;
    toString(): string;
}

export class ConcreatePrototype implements Prototype {

    toString(): string {
        return "I am ConcreatePrototype";
    }

    clone(): Prototype {
        return Object.create(this);
    }
}