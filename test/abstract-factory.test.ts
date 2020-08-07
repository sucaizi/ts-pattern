import { AbstractProductA, AbstractFactory, ConcreteFactory1, AbstractProductB, ConcreteFactory2 } from '../src/create-pattern/abstract-factory';

describe('abstract factory', () => {

    it('get product a1, 1', () => {

        let factory: AbstractFactory = new ConcreteFactory1();
        let productA1: AbstractProductA = factory.createProductA();
        let productB1: AbstractProductB = factory.createProductB(); 

        expect(productA1.method("a1")).toEqual("call product a1");
        expect(productB1.method()).toEqual("new product 1");
    });

    it('get product a2, 2', () => {

        let factory: AbstractFactory = new ConcreteFactory2();
        let productA1: AbstractProductA = factory.createProductA();
        let productB1: AbstractProductB = factory.createProductB(); 

        expect(productA1.method("a2")).toEqual("call product a2");
        expect(productB1.method()).toEqual("new product 2");
    });

});