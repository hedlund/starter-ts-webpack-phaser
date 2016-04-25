import { expect } from 'chai';
import hello from './hello';

describe('hello', () => {

    it('should export a function', () => {
        // The world's most useless test, but I just didn't
        // want to clutter this thing with DOM tests.
        expect(hello).to.be.a('function');
    });
});
