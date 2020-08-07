import { ConcreatePrototype, Prototype } from '../src/createPattern/prototype'

describe('prototype pattern', () => {
    it('work', () => {
        let o1: Prototype = new ConcreatePrototype('o1');
        let o2: Prototype = o1.clone();
        expect(o2.name).toEqual(o1.name)
    });

    it('different name', () => {
        let o1: Prototype = new ConcreatePrototype('o1');
        let o2: Prototype = o1.clone();
        o2.name = "o2";
        expect(o2.name).not.toEqual(o1.name)
    })
});