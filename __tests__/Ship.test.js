// /* globals describe it expect */
// const Ship = require('../src/Ship.js');
// const Port = require('../src/Port.js');

// describe('Ship', () => {
//     it('can be instantiated', () => {
//         expect(new Ship()).toBeInstanceOf(Object);
//     });
//     it('has a starting port', () => {
//         const port = new Port('Dover');
//         const ship = new Ship(port)
//         expect(ship.currentPort).toBe(port);
//     });
//     });
//     describe('Set sail', () => {
//       it('has a method called set sail', () => {
//         const ship = new Ship();
//         expect(ship.setSail).toBeInstanceOf(Function);
//       })
//     it('can set sail', () => {
//       const port = new Port('Dover');  
//       const ship = new Ship(port);
//         ship.setSail();
//         expect(ship.currentPort).toBeFalsy();
//     }); 
//     })
//     describe('dock', () => {
//       it('has a method called dock', () => {
//         const ship = new Ship();
//         expect(ship.dock).toBeInstanceOf(Function);
//       })
//       it('can dock at a different port', () => {
//         const dover = new Port('Dover');
//         const ship = new Ship();

//         const calais = new Port('Calais');
//         ship.dock(calais);

//         expect(ship.currentPort).toBe(calais);
//       })
//     })