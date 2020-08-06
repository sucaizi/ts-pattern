export interface AbstractFactory {
    createProductA(): AbstractProductA;
    createProductB(): AbstractProductB;
}

export interface AbstractProductA {
    method(param ? : any): string;
}

export interface AbstractProductB {
    method(): string;
}

export class ConcreteProductA1 implements AbstractProductA {
    method(param ? : any): string {
        return "call product " + param;
    }
}

export class ConcreteProductA2 implements AbstractProductA {
    method(param ? : any): string {
        return "call product " + param;
    }
}

export class ConcreteProductB1 implements AbstractProductB {
    method(): string {
        return "new product 1";
    }
}

export class ConcreteProductB2 implements AbstractProductB {
    method(): string {
        return "new product 2";
    }
}

export class ConcreteFactory1 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA1();
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB1()

    }
}

export class ConcreteFactory2 implements AbstractFactory {
    createProductA(): AbstractProductA {
        return new ConcreteProductA2();
    }
    createProductB(): AbstractProductB {
        return new ConcreteProductB2();
    }
}