import {
  ConcreteSubject,
  Observer,
  ConcreteObserver,
} from '../src/behavior-pattern/observer';

describe('observer pattern', () => {
  it('work', () => {
    let subject: ConcreteSubject = new ConcreteSubject();
    let o: Observer = new ConcreteObserver();
    subject.attatch(o);

    subject.message = 'receive new message';
    subject.notify();
    expect((<ConcreteObserver>o).show()).toEqual('receive new message');
  });
});
