import { SingletonEx } from '../src/create-pattern/singletonEx';

class Animal {
  public root: string = 'animal';
}

describe('singletonEx', () => {
  it('works', () => {
    const o1 = SingletonEx.getInstance(Animal);
    const o2 = SingletonEx.getInstance(Animal);

    expect(o1).toEqual(o2);
    expect(o1.root).toEqual(o2.root);
  });

  it('is instance of Animal', () => {
    const o1 = SingletonEx.getInstance(Animal);
    expect(o1).toBeInstanceOf(Animal);
  });
});
