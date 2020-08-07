// The behavior of Iterator
export interface Iterator<T> {
    first(): T;
    next(): T;
    hasNext(): boolean;
    currentItem(): T;
}

// You must create iterator for collection
export interface Aggregate<T> {
    createIterator(collection: Array<T>): Iterator<T>;
}

// ConcreteIterator, e.g. NumberIterator
export class NumberIterator implements Iterator<number>{

    private collection: Array<number> = [];
    private postions: number = 0;

    constructor(collection: Array<number>) {
        this.collection = collection;
    }

    first(): number {
        return this.collection[0];
    }

    next(): number {
        return this.collection[++this.postions];
    }

    hasNext(): boolean {
        return this.postions < this.collection.length;
    }

    currentItem(): number {
        return this.collection[this.postions];
    } 
}

// ConcreteAggregate, e.g. NumberAggregate
export class NumberAggregate implements Aggregate<number> {

    private collection: Array<number> = [];
    constructor(collection: Array<number>) {
        this.collection = collection;
    }

    createIterator(): Iterator<number> {
        return new NumberIterator(this.collection);
    }
}

