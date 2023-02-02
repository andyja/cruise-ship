/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('Port', () => {
    let port;
    beforeEach(() => {
        port = new Port('Calais')
    });
    xit('is an object', () => {
        expect(port).toBeInstanceOf(Object);
    });
    xit('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });
    xit('has a name Calais', () =>{
        expect(port.name).toEqual('Calais');
    })
    });