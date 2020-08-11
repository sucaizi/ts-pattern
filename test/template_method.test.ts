import { ConcreteClass } from '../src/behavior-pattern/template-method';

describe('template method pattern', () => {
  it('work', () => {
    let c: ConcreteClass = new ConcreteClass();
    c.templateMethod();
    expect(c.message).toEqual('step1;step2;');
  });
});
