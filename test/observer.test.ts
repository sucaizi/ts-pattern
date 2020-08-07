import {
    ConcreteSubject,
    Observer,
    concreteObserver
} from '../src/behavior-pattern/observer';

describe('observer pattern', () => {
    it('work', () => {
        let subject: ConcreteSubject = new ConcreteSubject();
        let o: Observer = new concreteObserver();
        subject.attatch(o);

        subject.message = "receive new message";
        subject.notify();
        expect(( < concreteObserver > o).show()).toEqual('receive new message');
    });
});