/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Port', () => {
    it('is an object', () => {
        expect(new Port).toBeInstanceOf(Object);
    });
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    it('sets a name', () =>{
        const port = new Port('Hull')
        expect(port.name).toEqual('Hull');
    })
    });