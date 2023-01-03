/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('Ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('has a starting port', () => {
        const ship = new Ship('Dover');
        expect(ship.startingPort).toBe('Dover');
    })
    });
    describe('Set sail', () => {
      it('has a method called set sail', () => {
        const ship = new Ship("Dover");
        expect(ship.setSail).toBeInstanceOf(Function);
      })
    xit('can set sail', () => {
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
}); 
    })