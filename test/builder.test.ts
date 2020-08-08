import { Product, ProductBuilder } from '../src/create-pattern/builder';

describe('builder pattern', () => {
  it('work', () => {
    let product: Product = new ProductBuilder({
      product: 'productA',
    })
      .setProp1('p1')
      .setProp2('p2')
      .setProp3('p3')
      .build();

    let info = product.prop1 + ' ' + product.prop2 + ' ' + product.prop3;
    expect(info).toEqual('p1 p2 p3');
  });
});
