/* globals describe it expect */
const Port = require('../src/Port.js');


describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    
    });
