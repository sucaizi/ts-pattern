import { Product, ProductFactory, Factory } from '../src/createPattern/factory'

describe('factory', () => {
    it('works', () => {
        let factory: Factory = new ProductFactory();
        let p1 : Product = factory.createProduct("A");
        let p2 : Product = factory.createProduct("B");

        expect(p1.method("testA")).toEqual("call ConcreteProductA method with testA")
        expect(p2.method("testB")).toEqual("call ConcreteProductB method with testB")

    });
});