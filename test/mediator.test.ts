import {
  ConcreteColleague1,
  ConcreteMediator,
  ConcreteColleague2,
} from '../src/behavior-pattern/mediator';

describe('mediator pattern', () => {
  it('work', () => {
    let mediator = new ConcreteMediator();
    let a = new ConcreteColleague1(mediator);
    let b = new ConcreteColleague2(mediator);

    mediator.concreateColleagueA = a;
    mediator.concreateColleagueB = b;

    a.send('go');
    expect(b.message).toEqual('colleague2 receive go');

    b.send('back');
    expect(a.message).toEqual('colleague1 receive back');
  });
});
