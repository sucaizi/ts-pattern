import { ConcreatePrototype, Prototype } from '../src/create-pattern/prototype';

describe('prototype pattern', () => {
  it('work', () => {
    let o1: Prototype = new ConcreatePrototype();
    let o2: Prototype = o1.clone();
    expect(o2.toString()).toEqual(o1.toString());
  });
});
