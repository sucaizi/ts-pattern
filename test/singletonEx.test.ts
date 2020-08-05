import { SingletonEx }  from '../src/createPattern/singletonEx';

class Animal  {
    public root: string = "animal";
}

describe('singleton', () => {
    it('works', () => {

        const o1 = SingletonEx.getInstance(Animal);
        const o2 = SingletonEx.getInstance(Animal);

        expect(o1).toEqual(o2);
        expect(o1.root).toEqual(o2.root);
    });
});