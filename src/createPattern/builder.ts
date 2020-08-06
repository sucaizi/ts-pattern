export class Product {

    prop1: string;
    prop2: string;
    prop3: string;

    constructor(builder: Builder) {
        this.prop1 = builder.prop1;
        this.prop2 = builder.prop2;
        this.prop3 = builder.prop3;
    }
}

export interface Builder {
    prop1: string;
    prop3: string;
    prop2: string;
    build(): Product;
}

export class ProductBuilder implements Builder {

    prop1: string = '';
    prop3: string = '';
    prop2: string = '';
    options: Object = {};

    constructor(options: Object) {
        this.options = options;
    }

    setProp1(value: string) {
        this.prop1 = value;
        return this;
    }

    setProp2(value: string) {
        this.prop2 = value;
        return this;
    }

    setProp3(value: string) {
        this.prop3 = value;
        return this;
    }

    public build(): Product {
        return new Product(this);
    }
}