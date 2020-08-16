import {
  ConcreteState1,
  Context,
  ConcreteState2,
  State,
} from '../src/behavior-pattern/state';

describe('state pattern', () => {
  it('work', () => {
    let state1: State = new ConcreteState1();
    let context: Context = new Context(state1);

    context.request();
    context.request();
    context.request();

    expect(context.state).toBeInstanceOf(ConcreteState2);
  });
});
