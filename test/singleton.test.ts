import { Singleton } from '../src/create-pattern/singleton';

describe('singleton', () => {
  it('works', () => {
    const o1 = Singleton.getInstance();
    const o2 = Singleton.getInstance();

    expect(o1).toEqual(o2);
  });
});
