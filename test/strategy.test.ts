import {
  ConcreteStrategy1,
  Context,
  ConcreteStrategy2,
} from '../src/behavior-pattern/strategy';

describe('strategy pattern', () => {
  it('work', () => {
    let s1: ConcreteStrategy1 = new ConcreteStrategy1();
    let context1: Context = new Context(s1);

    expect(context1.contextInterface()).toEqual(
      'ConcreteStrategy1 exec algorithem'
    );

    let s2: ConcreteStrategy2 = new ConcreteStrategy2();
    let context2: Context = new Context(s2);
    expect(context2.contextInterface()).toEqual(
      'ConcreteStrategy2 exec algorithem'
    );
  });
});
