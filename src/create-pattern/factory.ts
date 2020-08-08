export interface Product {
  method(param?: any): void;
}

export class ConcreteProductA implements Product {
  method = (param?: any) => {
    return 'call ConcreteProductA method with ' + param;
  };
}

export class ConcreteProductB implements Product {
  method = (param?: any) => {
    return 'call ConcreteProductB method with ' + param;
  };
}

export interface Factory {
  createProduct(type: string): Product;
}

export class ProductFactory implements Factory {
  public createProduct(type: string): Product | any {
    if (type === 'A') {
      return new ConcreteProductA();
    } else if (type === 'B') {
      return new ConcreteProductB();
    }

    return null;
  }
}
