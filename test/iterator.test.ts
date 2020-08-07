import { NumberAggregate, Iterator } from '../src/createPattern/iterator';

describe('iterator pattern', () => {

    it('first work', () => {
        let arr: number[] = [459, 52, 96, 5685, 47, 26, 49];
        let it: Iterator<number> = new NumberAggregate(arr).createIterator();
    
        expect(it.first()).toEqual(459);
    });

    it('next work', () => {
        let arr: number[] = [459, 52, 96, 5685, 47, 26, 49];
        let it: Iterator<number> = new NumberAggregate(arr).createIterator();
        let v: number = it.next();
    
        expect(v).toEqual(52);
    });

    it('hasNext work', () => {
        let arr: number[] = [459, 52, 96];
        let it: Iterator<number> = new NumberAggregate(arr).createIterator();
        it.next();
        let v: boolean = it.hasNext();
        expect(v).toEqual(true);

        it.next();
        it.next();
        v = it.hasNext();
    
        expect(v).toEqual(false);
    });

    it('currentItem work', () => {
        let arr: number[] = [459, 52, 96];
        let it: Iterator<number> = new NumberAggregate(arr).createIterator();

        let v1 = it.next();
        let v2 = it.currentItem();
        expect(v1).toEqual(v2);

        it.next();
        it.next();

        let v = it.currentItem();
        expect(v).toBeUndefined();
    });


})

