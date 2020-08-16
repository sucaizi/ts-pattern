import {
  Originator,
  State,
  Memento,
  CareTaker,
} from '../src/behavior-pattern/memento';

describe('Memento pattern', () => {
  it('work', () => {
    // add status1
    let state1 = new State('status1');
    let originator: Originator = new Originator(state1);

    // save state to memento
    let memento: Memento = originator.createMemento();
    let careTaker: CareTaker = new CareTaker();
    careTaker.memento = memento;

    // change to status2
    let state2 = new State('status2');
    originator.state = state2;
    expect(originator.state.status).toEqual(state2.status);

    // restore state from memento
    originator.setMemento(careTaker.memento);

    expect(originator.state.status).toEqual(state1.status);
  });
});
